import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


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

  constructor(private httpClient: HttpClient) {}

  register() {
    const userData = {
      first_name: this.firstName,
      last_name: this.lastName,
      email: this.email,
      phone: this.phoneNumber,
      password: this.password,
      confirm_password: this.confirmPassword
    };

    const apiUrl = 'http://localhost:5000/user'; // Replace with your server URL
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    this.httpClient.post<any>(apiUrl, userData, { headers })
      .subscribe(
        (response) => {
          console.log('Registration successful:', response);
          // Handle success, such as displaying a success message or navigating to another page
        },
        (error) => {
          console.error('Error during registration:', error);
          // Handle error, such as displaying an error message
        }
      );
  }

  login() {
    this.switchToLogin.emit(true);
  }
}

