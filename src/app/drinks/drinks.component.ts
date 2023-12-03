import { Component, ViewChild } from '@angular/core';
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
      size:"", price: 2.99,
      displayPic:"chocolatems.jpg"
    },
    {
      id:"02",
      fName:"Strawberry Milkshake ",
      desc:"Lorem ipsum.....",
      additionalRequest: "",
      size:"", price: 2.99,
      displayPic:"strawberryms.jpg"
    },
    {
      id:"03",
      fName:"Vanilla Milkshake",
      desc:"Lorem ipsum.....",
      additionalRequest: "",
      size:"", price: 2.99,
      displayPic:"Vanillams.jpg"
    },
    {
      id:"04",
      fName:"Sunset Slushie",
      desc:"Lorem ipsum.....",
      additionalRequest: "",
      size:"", price: 2.99,
      displayPic:"SunsetSlushie.jpg"
    },
    {
      id:"05",
      fName:"Red Wine Ice Cream Float",
      desc:"Lorem ipsum.....",
      additionalRequest: "",
      size:"", price: 2.99,
      displayPic:"redwineicecreamfloat.jpg"
    },
    {
      id:"06",
      fName:"Pineapple Slushie",
      desc:"Lorem ipsum.....",
      additionalRequest: "",
      size:"", price: 2.99,
      displayPic:"pineappleslushie.jpg"
    },
  
    {
      id:"07",
      fName:"Root Beer Float",
      desc:"Lorem ipsum.....",
      additionalRequest: "",
      size:"", price: 2.99,
      displayPic:"RootBeerFloat.jpg"
    },
  
    {
      id:"08",
      fName:"Butterscotch Milkshake",
      desc:"Lorem ipsum.....",
      additionalRequest: "",
      size:"", price: 2.99,
      displayPic:"butterscotchmilkshake.jpg"
    },
  
  ]
  public selectedSize: string = ''; // To store the selected size
  private selectedToppings: any = []; // To store the selected toppings
  public additionalRequest: string = ''; // To store additional comments
  public selectedFlavor: any;
  public toppings: any[] = [
    { id: 1, name: 'Oreo Crumbs', isSelected: false },
    { id: 2, name: 'Chocolate Crunch', isSelected: false },
    { id: 3, name: 'Rainbow Sprinkles', isSelected: false },
    { id: 4, name: 'Chocolate Sprinkles', isSelected: false },
    { id: 5, name: 'Fudge', isSelected: false },
    { id: 6, name: 'Dry Nuts', isSelected: false },
    { id: 7, name: 'Fruits', isSelected: false },
    { id: 8, name: 'M & M', isSelected: false }
  ];
  public counterValue: number = 1;
  public priceVal:number =0;
  public originalPrice:number=0;
  @ViewChild('closeFlavModal') closeFlavModal: any;

  constructor(private commonservice: CommonserviceService) {
    this.selectedToppings = []; 
  }
  public increment() {
    this.counterValue++;
    this.priceVal = this.originalPrice * this.counterValue
  }

  public decrement() {
    if (this.counterValue > 1) {
      this.counterValue--;
      this.priceVal = (this.originalPrice * this.counterValue);
    }
  }

  public updateSelectedToppings(id: any, name: any) {
    this.toppings.filter(item => {
      if (item.id == id) {
        this.selectedToppings.push(item);
      }
    });
  }

  public addToCart() {
    const iceCreamDetail = {
      productType: "Drinks",
      item: this.selectedFlavor.fName + ' - ' + this.selectedSize,
      type: null,
      size: this.selectedSize,
      toppings: this.selectedToppings,
      customerComments: this.additionalRequest,
      count: this.counterValue,
      price: this.priceVal
    };
    this.commonservice.addToCart(iceCreamDetail);
    this.clearForm();
    this.closeFlavModal.nativeElement.click();
  }

  public viewProduct(item: string) {
    this.selectedFlavor = this.drinksArray.find(flavor => flavor.fName === item);
    const indx = this.drinksArray.findIndex(x => x.fName === item)
    this.originalPrice = this.drinksArray[indx].price;
    this.priceVal = this.originalPrice;
    this.selectedFlavor.displayPic = this.drinksArray[indx].displayPic;
  }

  private clearForm() {
    this.selectedSize = '';
    this.selectedToppings = [];
    this.additionalRequest = '';
    this.counterValue = 1;
    this.toppings.forEach((topping: any) => topping.isSelected = false );
  }

}
