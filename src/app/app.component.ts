import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isLogin: boolean = true;
  @ViewChild('closeLogin') closeLogin: any;

  constructor(public router: Router){}

  enableLogin(event: boolean) {
    this.isLogin = event;
  }

  signin(event: any) {
    this.router.navigate(['./user']);
    this.closeLogin.nativeElement.click();
  }
}
