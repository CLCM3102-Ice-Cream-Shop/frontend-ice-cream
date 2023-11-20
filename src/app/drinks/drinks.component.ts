import { Component } from '@angular/core';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent {
  public drinksArray =[
    {
      id:"01",
      fName:"Chocolate Milkshake",
      desc:"Lorem ipsum.....",
      additionalRequest: "",
      size:"",
      displayPic:"chocolatems.jpg"
    },
    {
      id:"02",
      fName:"Strawberry Milkshake ",
      desc:"Lorem ipsum.....",
      additionalRequest: "",
      size:"",
      displayPic:"strawberryms.jpg"
    },
    {
      id:"03",
      fName:"Vanilla Milkshake",
      desc:"Lorem ipsum.....",
      additionalRequest: "",
      size:"",
      displayPic:"Vanillams.jpg"
    },
    {
      id:"04",
      fName:"Sunset Slushie",
      desc:"Lorem ipsum.....",
      additionalRequest: "",
      size:"",
      displayPic:"SunsetSlushie.jpg"
    },
    {
      id:"05",
      fName:"Red Wine Ice Cream Float",
      desc:"Lorem ipsum.....",
      additionalRequest: "",
      size:"",
      displayPic:"redwineicecreamfloat.jpg"
    },
    {
      id:"06",
      fName:"Pineapple Slushie",
      desc:"Lorem ipsum.....",
      additionalRequest: "",
      size:"",
      displayPic:"pineappleslushie.jpg"
    },
  
    {
      id:"07",
      fName:"Root Beer Float",
      desc:"Lorem ipsum.....",
      additionalRequest: "",
      size:"",
      displayPic:"RootBeerFloat.jpg"
    },
  
    {
      id:"08",
      fName:"Butterscotch Milkshake",
      desc:"Lorem ipsum.....",
      additionalRequest: "",
      size:"",
      displayPic:"butterscotchmilkshake.jpg"
    },
  
  ]
  constructor(private commonservice: CommonserviceService) {}
}
