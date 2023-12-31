import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonserviceService } from '../../commonservice.service';
import { environment } from 'src/environments/environment';

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

  constructor(private router: Router, private httpClient: HttpClient, private dataService:CommonserviceService) {}

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

    const apiUrl = `${environment.apiCustomerUrl}/customer`; 
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    this.httpClient.post<any>(apiUrl, userData, { headers })
      .subscribe(
        (response) => {
          console.log('Registration successful:', response);
          alert('Register successful!');
         this.dataService.setCustomerRegisteredDetails(userData);
          localStorage.setItem('email', response.email);
          localStorage.setItem('name', response.name);
          this.reset();
          this.switchToLogin.emit(true);
          // this.router.navigate(['/user']);
        },
        (error) => {
          console.error('Error during registration:', error);
          alert('Error: register is not complete.');
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

