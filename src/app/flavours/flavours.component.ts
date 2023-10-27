import { Component } from '@angular/core';

@Component({
  selector: 'app-flavours',
  templateUrl: './flavours.component.html',
  styleUrls: ['./flavours.component.css']
})
export class FlavoursComponent {
public flavoursArray =[
  {
    id:"01",
    fName:"Vanilla",
    desc:"Lorem ipsum.....",
    additionalRequest: "",
    size:"",
    displayPic:"vanilla.jpg"
  },
  {
    id:"02",
    fName:"Strawberry",
    desc:"Lorem ipsum.....",
    additionalRequest: "",
    size:"",
    displayPic:"strawberry.jpg"
  },
  {
    id:"03",
    fName:"Chocolate",
    desc:"Lorem ipsum.....",
    additionalRequest: "",
    size:"",
    displayPic:"chocolate.jpg"
  },
  {
    id:"04",
    fName:"Pista",
    desc:"Lorem ipsum.....",
    additionalRequest: "",
    size:"",
    displayPic:"pista.jpg"
  },
  {
    id:"05",
    fName:"Butter Pecan",
    desc:"Lorem ipsum.....",
    additionalRequest: "",
    size:"",
    displayPic:"Butter Pecan.jpeg"
  },
  {
    id:"06",
    fName:"Neapolitan",
    desc:"Lorem ipsum.....",
    additionalRequest: "",
    size:"",
    displayPic:"neapolitan.jpg"
  },

  {
    id:"07",
    fName:"Butterscotch",
    desc:"Lorem ipsum.....",
    additionalRequest: "",
    size:"",
    displayPic:"butterscotch.jpg"
  },

  {
    id:"08",
    fName:"Raspberry Ripple",
    desc:"Lorem ipsum.....",
    additionalRequest: "",
    size:"",
    displayPic:"Raspberry.jpg"
  },
]
}
