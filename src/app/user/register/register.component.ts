import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonserviceService } from 'src/app/commonservice.service';

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

  constructor(private router: Router, private httpClient: HttpClient) {}

  register() {
    const userData = {
      first_name: this.firstName,
      last_name: this.lastName,
      email: this.email,
      phone: this.phoneNumber,
      password: this.password,
      confirm_password: this.confirmPassword
    };
    // this.dataService.closeTheModal(true);

    const apiUrl = 'http://localhost:5000/customer'; 
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    this.httpClient.post<any>(apiUrl, userData, { headers })
      .subscribe(
        (response) => {
          console.log('Registration successful:', response);
          alert('Register successful!');
          localStorage.setItem('email', response.email);
          localStorage.setItem('name', response.name);
          this.reset();
          this.switchToLogin.emit(true);
          this.router.navigate(['/home']);
        },
        (error) => {
          console.error('Error during registration:', error);
        }
      );
  }

  login() {
    this.switchToLogin.emit(true);
  }

  reset() {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.phoneNumber = '';
    this.password = '';
    this.confirmPassword = '';
  }
}

