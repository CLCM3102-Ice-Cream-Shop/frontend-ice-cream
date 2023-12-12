import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonserviceService } from 'src/app/commonservice.service';
import { environment } from 'src/environments/environment';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    public email: string = '';
    public password: string = '';
    public isLogin: boolean = true;
    public userName: string = '';
    public emailInvalid: boolean = false;
    public pswrdInvalid: boolean = false;
    public isUserInvalid: boolean = false;
    @Output() enableLogin: EventEmitter<any> = new EventEmitter();
    @Output() signin: EventEmitter<any> = new EventEmitter();
    @Input() isLoginApp: boolean;
    public registeredCustomerDetails:any=[];
    userData = {
        email: '',
        password: '',
    };
    ngOnInit() {
        const obj = this.dataService.getStoredCustomerDetails() || [{}];
        this.registeredCustomerDetails.push(obj)
       
     }
    constructor(
        private httpClient: HttpClient,
        private commonSvc: CommonserviceService,private dataService:CommonserviceService
    ) {}

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['isLoginApp']) {
            this.isLogin = this.isLoginApp;        
            this.reset();    
        }
    }

    login() {
        this.isUserInvalid = false;
        this.isLogin = true;
        if (this.email === '' && this.password === '') {
            this.emailInvalid = true;
            this.pswrdInvalid = true;
            return;
        } else if (this.email !== '' && this.password === '') {
            this.emailInvalid = false;
            this.pswrdInvalid = true;
            return;
        } else if (this.email === '' && this.password !== '') {
            this.emailInvalid = true;
            this.pswrdInvalid = false;
            return;
        } else {
            this.emailInvalid = false;
            this.pswrdInvalid = false;
        }
         this.userData = {
            email: this.email,
            password: this.password,
        };
        if(this.registeredCustomerDetails.length<0){
            const obj = this.dataService.getStoredCustomerDetails() || [{}];
            this.registeredCustomerDetails.push(obj);
            console.log(this.registeredCustomerDetails)
        }
        const user = this.registeredCustomerDetails.find(
            (u:any) => u.email === this.email && u.password === this.password
          );
          if (user) {
            this.isLogin = true;
            // this.dataService.loginUser(this.email)
            this.signin.emit(true);
            
      
          } else {
        //    alert('Login Failed. Please check your username and password.')
          }
        const apiUrl = `${environment.apiCustomerUrl}/customer/login`;
        const headers = new HttpHeaders().set('Content-Type', 'application/json');

        this.httpClient.post<any>(apiUrl, this.userData, { headers }).subscribe({
            next: (response) => {
                console.log(response, "username")
                alert('Login successful!');
                this.isLogin = true;
                this.userName = response.first_name;
                this.commonSvc.setCustomerIDAndName(response.customer_id, response.first_name);
                // this.commonSvc.setUserName(response.first_name);

                this.signin.emit(true);
            },
            error: (error) => {
                this.isUserInvalid = true;
                console.error('Login error', error);
                alert("Please register to login");
                this.isLogin=false;
            }
        });
    }

    signUp() {
        this.isLogin = !this.isLogin;
        this.enableLogin.emit(this.isLogin);
    }

    switchToLogin(event: boolean) {
        this.isLogin = event;
        this.enableLogin.emit(this.isLogin);
    }
    reset(){
        this.userData = {
            email: '',
            password: '',
        };
    }
}
