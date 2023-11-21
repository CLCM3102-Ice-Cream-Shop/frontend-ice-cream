import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  firstName: string = '';
  email: string = '';
  password: string = '';
  lastName: string = '';
  phoneNumber: string = '';
  confirmPassword: string = '';
  showRegistration = false;
  @Output() switchToLogin: EventEmitter<any> = new EventEmitter();

  register() {
    // Perform registration using the firstName, lastName, email, phonenumber and password
  }

  login() {
    this.switchToLogin.emit(true);
  }
}

