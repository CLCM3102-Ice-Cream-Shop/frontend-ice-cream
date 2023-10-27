import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlavoursComponent } from './flavours/flavours.component'
import { HomePageComponent } from './home-page/home-page.component'

import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'flavours',component:FlavoursComponent},
  {path:'home',component:HomePageComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
