import { Component } from '@angular/core';

@Component({
  selector: 'app-special-menu',
  templateUrl: './special-menu.component.html',
  styleUrls: ['./special-menu.component.css']
})
export class SpecialMenuComponent {

  public specialArray =[
    {
      id:"01",
      fName:"Frozen caramel nut crunch ice cream",
      desc:"Lorem ipsum.....",
      additionalRequest: "",
      size:"",
      displayPic:"Frozen_caramel_nut_crunch_ice_cream_pie.png"
    },
    {
      id:"02",
      fName:"Strawberry Lemon Shortcake Sundae",
      desc:"Lorem ipsum.....",
      additionalRequest: "",
      size:"",
      displayPic:"Strawberry-Lemon-Shortcake-Sundae.png"
    },
    {
      id:"03",
      fName:"Vanilla Pudding Cookie Trifle",
      desc:"Lorem ipsum.....",
      additionalRequest: "",
      size:"",
      displayPic:"Vanilla-Pudding-Cookie-Trifle.png"
    },
    {
      id:"04",
      fName:"Mile High Birthday Ice Cream Cake",
      desc:"Lorem ipsum.....",
      additionalRequest: "",
      size:"",
      displayPic:"Mile-High-Birthday-Ice-Cream-Cake.png"
    },
  
  ]
  }
  