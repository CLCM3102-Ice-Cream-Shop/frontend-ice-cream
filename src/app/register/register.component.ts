import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string ='';
  email: string ='';
  password: string ='';
  confirmPassword: string ='';
  showRegistration = false;
  register() {
    // Perform registration using the username, email, and password
}
}

