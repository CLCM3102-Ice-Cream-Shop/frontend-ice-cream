import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  username = '';
  password = '';
  loginMessage = '';

  users = [
    { username: 'akila', password: 'password1' },
    { username: 'rani', password: 'password2' },
  ];
constructor(private httpClient: HttpClient, private router: Router){}
  onSubmit() {
    const userData = {
      email: this.username,
      password: this.password,
  };
    const apiUrl = `${environment.apiCustomerUrl}/staff/login`;
        const headers = new HttpHeaders().set('Content-Type', 'application/json');

        this.httpClient.post<any>(apiUrl, userData, { headers }).subscribe({
            next: (response) => {
                console.log("Login successful", response)
                alert("Login Successful!")
                this.router.navigate(['/adminOrderDetails']);
            },
            error: (error) => {
                console.error('Login error', error);
                this.loginMessage = 'Login Failed. Please check your username and password.';
            }
        });
  }

}
