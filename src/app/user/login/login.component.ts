import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    public email:string = '';
    public password:string = '';
    public isLogin: boolean = true;
    @Output() enableLogin: EventEmitter<any> = new EventEmitter();
    @Output() signin: EventEmitter<any> = new EventEmitter();

    login() {
        // Perform login using the username and password
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
