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
    @Output() enableLogin: EventEmitter<any> = new EventEmitter();
    @Output() signin: EventEmitter<any> = new EventEmitter();

    constructor(private httpClient: HttpClient) { }
    login() {
        const userData = {
            email: this.email,
            password: this.password,
        };

        const apiUrl = 'http://localhost:5000/login'; // Replace with your server URL
        const headers = new HttpHeaders().set('Content-Type', 'application/json');

        this.httpClient.post<any>(apiUrl, userData, { headers })
            .subscribe(
                (response) => {
                    alert('Login successful!');
                },
                (error) => {
                    console.error('Login error', error);
                }
            );
        this.signin.emit(true);;
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
