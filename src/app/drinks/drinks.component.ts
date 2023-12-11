import { Component, ViewChild } from '@angular/core';
import { CommonserviceService } from '../commonservice.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent {

    //TODO: implement this later
  // onInit() {
  //   const apiUrl = `${environment.apiProductUrl}/menu/drink`;
  //   this.httpClient.get<any>(apiUrl)
  //     .subscribe(
  //       (error) => {
  //         console.error("Error fetching drink menu")
  //       }
  //     )
  // }
  public drinksArray =[
    {
      id:"DRK01",
      fName:"Chocolate Milkshake",
      desc:"Lorem ipsum.....",
      additionalRequest: "",
      size:"", price: 5.99,
      displayPic:"chocolatems.jpg"
    },
    {
      id:"DRK02",
      fName:"Strawberry Milkshake",
      desc:"Lorem ipsum.....",
      additionalRequest: "",
      size:"", price: 3.99,
      displayPic:"strawberryms.jpg"
    },
    {
      id:"DRK03",
      fName:"Vanilla Milkshake",
      desc:"Lorem ipsum.....",
      additionalRequest: "",
      size:"", price: 4.99,
      displayPic:"Vanillams.jpg"
    },
    {
      id:"DRK04",
      fName:"Sunset Slushie",
      desc:"Lorem ipsum.....",
      additionalRequest: "",
      size:"", price: 2.99,
      displayPic:"SunsetSlushie.jpg"
    },
    {
      id:"DRK05",
      fName:"Red Wine Ice Cream Float",
      desc:"Lorem ipsum.....",
      additionalRequest: "",
      size:"", price: 4.99,
      displayPic:"redwineicecreamfloat.jpg"
    },
    {
      id:"DRK06",
      fName:"Pineapple Slushie",
      desc:"Lorem ipsum.....",
      additionalRequest: "",
      size:"", price: 1.99,
      displayPic:"pineappleslushie.jpg"
    },
  
    {
      id:"DRK07",
      fName:"Root Beer Float",
      desc:"Lorem ipsum.....",
      additionalRequest: "",
      size:"", price: 6.99,
      displayPic:"RootBeerFloat.jpg"
    },
  
    {
      id:"DRK08",
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
  public selectedId: string = '';
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
  constructor(private commonservice: CommonserviceService, private httpClient: HttpClient) {
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
    const storedCustomerID = this.commonservice.getStoredCustomerID();
    const request = {
      customer_id: storedCustomerID,
      menu_id: this.selectedId,
      quantity: this.counterValue,
      // properties: this.phoneNumber,
      additional_request: this.additionalRequest
    };
    const apiUrl = `${environment.apiPaymentUrl}/cart`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.httpClient.post<any>(apiUrl, request, { headers }).subscribe(
      (response) => {
        if (response && response.data) {
          console.log("Add item to cart success", response)
        }
      },
      (error) => {
        console.log("Error can't add item to cart", error)
      }
    );
    this.clearForm();
    this.closeFlavModal.nativeElement.click();
  }

  public viewProduct(item: string) {
    this.selectedFlavor = this.drinksArray.find(flavor => flavor.fName === item);
    const indx = this.drinksArray.findIndex(x => x.fName === item)
    this.originalPrice = this.drinksArray[indx].price;
    this.priceVal = this.originalPrice;
    this.selectedFlavor.displayPic = this.drinksArray[indx].displayPic;
    this.selectedId = this.drinksArray[indx].id;
  }

  private clearForm() {
    this.selectedSize = '';
    this.selectedToppings = [];
    this.additionalRequest = '';
    this.counterValue = 1;
    this.toppings.forEach((topping: any) => topping.isSelected = false );
    this.selectedId = '';
  }

}
