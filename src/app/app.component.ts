import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonserviceService } from './commonservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public isLogin: boolean = false;
  public userName: string = '';
  public isAuthenticated: boolean = false;
  @ViewChild('closeLogin') closeLogin: any;

  constructor(public router: Router, private dataService: CommonserviceService) { }

  login() {
    if (this.isAuthenticated) {      
      this.router.navigate(['./user']);
    } else {
      this.isLogin = true;
    }
  }

  enableLogin(event: boolean) {
    this.isLogin = event;
    console.log(this.isLogin);
  }

  signin(event: any) {
    this.closeLogin.nativeElement.click();
    this.isAuthenticated = true;
    this.router.navigate(['./user']);
  }

}
