import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlavoursComponent } from './flavours/flavours.component'
import { HomePageComponent } from './home-page/home-page.component'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'flavours', component: FlavoursComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
