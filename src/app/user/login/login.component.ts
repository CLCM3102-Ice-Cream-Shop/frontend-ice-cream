import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    public email: string = '';
    public password: string = '';
    public isLogin: boolean = true;
    public userName:string = '';
    @Output() enableLogin: EventEmitter<any> = new EventEmitter();
    @Output() signin: EventEmitter<any> = new EventEmitter();

    constructor(private httpClient: HttpClient) { }
    login() {
        this.isLogin= true;
        const userData = {
            email: this.email,
            password: this.password,
        };
        this.isLogin = true;
                    if(this.isLogin){
                    this.signin.emit(true );
                    }
        // const apiUrl = 'http://localhost:5000/login'; // Replace with your server URL
        // const headers = new HttpHeaders().set('Content-Type', 'application/json');

        // this.httpClient.post<any>(apiUrl, userData, { headers })
        //     .subscribe(
        //         (response) => {
        //             console.log(response,"username")
        //             alert('Login successful!' );
        //             this.isLogin = true;
        //             this.userName = response.first_name;

        //             if(this.isLogin){
        //             this.signin.emit(true );

        //             }
        //         },
        //         (error) => {
        //             console.error('Login error', error);
        //             alert("Please register to login")
        //         }
        //     );
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
