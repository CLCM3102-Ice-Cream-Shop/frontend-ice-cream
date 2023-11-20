import { Component, ViewChild } from '@angular/core';
import { CartComponent } from '../user/cart/cart.component';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-flavours',
  templateUrl: './flavours.component.html',
  styleUrls: ['./flavours.component.css']
})
export class FlavoursComponent {

  public selectedType: string = ''; // To store the selected type
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
  public flavoursArray = [
    {
      id: "01",
      fName: "Vanilla",
      desc: "Lorem ipsum.....",
      additionalRequest: "",
      size: "",
      displayPic: "vanilla.jpg",
      price: 3.99
    },
    {
      id: "02",
      fName: "Strawberry",
      desc: "Lorem ipsum.....",
      additionalRequest: "",
      size: "",
      displayPic: "strawberry.jpg",
      price: 4.48
    },
    {
      id: "03",
      fName: "Chocolate",
      desc: "Lorem ipsum.....",
      additionalRequest: "",
      size: "",
      displayPic: "chocolate.jpg",
      price: 5.99
    },
    {
      id: "04",
      fName: "Pista",
      desc: "Lorem ipsum.....",
      additionalRequest: "",
      size: "",
      displayPic: "pista.jpg",
      price: 4.99
    },
    {
      id: "05",
      fName: "Butter Pecan",
      desc: "Lorem ipsum.....",
      additionalRequest: "",
      size: "",
      displayPic: "Butter Pecan.jpeg",
      price: 6.59
    },
    {
      id: "06",
      fName: "Neapolitan",
      desc: "Lorem ipsum.....",
      additionalRequest: "",
      size: "",
      displayPic: "neapolitan.jpg",
      price: 3.99
    },

    {
      id: "07",
      fName: "Butterscotch",
      desc: "Lorem ipsum.....",
      additionalRequest: "",
      size: "",
      displayPic: "butterscotch.jpg",
      price: 6.99
    },

    {
      id: "08",
      fName: "Raspberry Ripple",
      desc: "Lorem ipsum.....",
      additionalRequest: "",
      size: "",
      displayPic: "Raspberry.jpg",
      price: 7.99
    },

  ];
  public counterValue: number = 1;
  public priceVal: number = 0;
  private originalPrice: number = 0;
  @ViewChild('closeFlavModal') closeFlavModal: any;

  constructor(private commonservice: CommonserviceService) {
    this.selectedToppings = []; // Initialize selectedToppings as an empty array
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
      flavour: this.selectedFlavor.fName,
      type: this.selectedType,
      size: this.selectedSize,
      toppings: this.selectedToppings,
      customerComments: this.additionalRequest,
      count: this.counterValue,
      price: this.priceVal,
      displayPic: this.selectedFlavor.displayPic 
    };
    this.commonservice.addToCart(iceCreamDetail);
    this.clearForm();
    this.closeFlavModal.nativeElement.click();
  }

  public viewProduct(item: string) {
    this.selectedFlavor = this.flavoursArray.find(flavor => flavor.fName === item);
    const indx = this.flavoursArray.findIndex(x => x.fName === item)
    this.originalPrice = this.flavoursArray[indx].price;
    this.priceVal = this.originalPrice;
    this.selectedFlavor.displayPic = this.flavoursArray[indx].displayPic;
  }

  private clearForm() {
    this.selectedType = '';
    this.selectedSize = '';
    this.selectedToppings = [];
    this.additionalRequest = '';
    this.counterValue = 1;
    this.toppings.forEach((topping: any) => topping.isSelected = false );
  }

}
