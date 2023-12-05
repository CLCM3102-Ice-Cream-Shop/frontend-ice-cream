import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonserviceService } from './commonservice.service';
import * as $ from "jquery";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isLogin: boolean = false;
  @ViewChild('userModal') userModal: any;
 
  @ViewChild('testModal') testModal: any;

  constructor(public router: Router, private dataService : CommonserviceService){}
  public showLoginName:boolean = false;
ngOnInit(){}
  enableLogin(event: boolean) {
    this.isLogin = event;
      
    console.log(this.isLogin)

  }

  signin(event: any) {
    this.showLoginName = true;
    this.router.navigate(['./user']);
  }
}
