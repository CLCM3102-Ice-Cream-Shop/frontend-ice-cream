import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlavoursComponent } from './flavours/flavours.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { DrinksComponent } from './drinks/drinks.component';
import { SpecialMenuComponent } from './special-menu/special-menu.component';
import { CartComponent } from './user/cart/cart.component';
import { CommonserviceService } from './commonservice.service';
import { ProfileComponent } from './user/profile/profile.component';
import { UserComponent } from './user/user.component';
import { OrderComponent } from './user/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    FlavoursComponent,
    HomePageComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    DrinksComponent,
    SpecialMenuComponent,
    CartComponent,
    ProfileComponent,
    UserComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CommonserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
