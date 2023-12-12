import { Component, ViewChild,SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CommonserviceService } from './commonservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public isLogin: boolean = false;
  public userName: string | null = null;
  public isAuthenticated: boolean = false;
  @ViewChild('closeLogin') closeLogin: any;
ngOnInit(){

}
  constructor(public router: Router, private commonSvc: CommonserviceService) {
  }
  ngOnChanges(changes: SimpleChanges): void {
  this.userName = this.commonSvc.getStoredUserName();

  }
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

  logout(){
    this.isAuthenticated=false;
    this.router.navigate(['/home'])
  }
}
