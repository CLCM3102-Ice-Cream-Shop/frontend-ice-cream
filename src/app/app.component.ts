import { Component } from '@angular/core';
import { FlavoursComponent } from './flavours/flavours.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iceCreamShopApp';

  constructor(public router: Router){}
}
