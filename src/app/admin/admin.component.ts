import { Component } from '@angular/core';

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

  onSubmit() {
    const user = this.users.find(
      (u) => u.username === this.username && u.password === this.password
    );
    if (user) {
      this.loginMessage = 'Login Successful!';
    } else {
      this.loginMessage = 'Login Failed. Please check your username and password.';
    }
  }

}
