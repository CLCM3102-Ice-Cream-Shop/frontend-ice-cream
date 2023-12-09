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

    constructor(
        private httpClient: HttpClient,
        private commonSvc: CommonserviceService
    ) {}

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['isLoginApp']) {
            this.isLogin = this.isLoginApp;            
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
        const userData = {
            email: this.email,
            password: this.password,
        };

        const apiUrl = `${environment.apiCustomerUrl}/customer/login`;
        const headers = new HttpHeaders().set('Content-Type', 'application/json');

        this.httpClient.post<any>(apiUrl, userData, { headers }).subscribe({
            next: (response) => {
                console.log(response, "username")
                alert('Login successful!');
                this.isLogin = true;
                this.userName = response.first_name;
                this.commonSvc.setCustomerID(response.customer_id);
                this.commonSvc.setUserName(response.first_name);
                this.signin.emit(true);
            },
            error: (error) => {
                this.isUserInvalid = true;
                console.error('Login error', error);
                alert("Please register to login");
                // remove after API works.
                this.signin.emit(true);
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
}
