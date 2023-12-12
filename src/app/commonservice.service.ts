import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  cartItems: any[] = JSON.parse(localStorage.getItem('cartItems') || '[]');

  addToCart(item: any) {
    console.log('Before adding to cart:', this.cartItems);
    const existingItem = this.cartItems.find(cartItem => {
      if (cartItem.item === item.item && cartItem.type === item.type && cartItem.size === item.size) {
        const toppingCount = cartItem.toppings?.filter((obj: any) => item.toppings.some((itemObj: any) => obj.id === itemObj.id));
        return toppingCount?.length === item.toppings?.length ? true : false;
      } else {
        return false;
      }
    });
    if (existingItem) {
      existingItem.count += item.count || 1;
    } else {
      this.cartItems.push(item);
    }
    console.log('After adding to cart:', this.cartItems);
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  updateCart(item: any) {
    const existingItem = this.cartItems.find(cartItem => {
      if (cartItem.item === item.item && cartItem.type === item.type && cartItem.size === item.size) {
        const toppingCount = cartItem.toppings?.filter((obj: any) => item.toppings.some((itemObj: any) => obj.id === itemObj.id));
        return toppingCount?.length === item.toppings?.length ? true : false;
      } else {
        return false;
      }
    });
    if (existingItem) {
      existingItem.count = item.count;
    }
  }

  getCartItems() {
    return JSON.parse(localStorage.getItem('cartItems') || '[]');
  }

  removeFromCart(index: number) {
    if (index >= 0 && index < this.cartItems.length) {
      this.cartItems.splice(index, 1);
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    }
  }

  clearCart() {
    this.cartItems = [];
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }
  public registeredCustomerDetails: any = [];
  public customer ={
    customerID:   null,
    customerName:  null,
  };
 
  setCustomerIDAndName(customerID:any , customerName:any) {
   this.customer.customerID=customerID;
   this.customer.customerName = customerName;
    this.saveCustomerIDToLocalStorage(this.customer);
    console.log(this.customer);
  }
  public customerIdArray:any =[];
  public saveCustomerIDToLocalStorage(customer: object) {
    if (this.customer.customerID !== null) {
      this.customerIdArray.push(this.customer)
      localStorage.setItem('customer', JSON.stringify(this.customerIdArray));
    }
  }
  public getStoredCustomerID():any {
    // const storedData = localStorage.getItem('customer');
    // if(storedData !== null) {
    // const storedDataArray: any[] = JSON.parse(storedData);
    // storedDataArray.forEach(item => {
    //   item.customerID == this.customer.customerID
  
    // })}
    return this.customer.customerID
    
  }

  // public userName: string | null = null;

  // setUserName(userName: string) {
  //   this.userName = userName;
  //   this.saveUserNameToLocalStorage();
  // }

  // public saveUserNameToLocalStorage() {
  //   if (this.userName !== null) {
  //     localStorage.setItem('userName', this.userName);
  //   }
  // }

  public getStoredUserName(): string | null {
    // const storedData = localStorage.getItem('userName');
    // return storedData !== null ? storedData : null;
    console.log(this.customer.customerName)
    return this.customer.customerName
  }
  setCustomerRegisteredDetails(obj:any){
    // this.registeredCustomerDetails.push(obj);
    // localStorage.removeItem('customerDetails');
    this.saveCustomerDetailsToLocalStorage(obj);
    }
    public saveCustomerDetailsToLocalStorage(details:any) {
      const existingDetail = this.getStoredCustomerDetails();
      let tempArray :any[] =[];
      tempArray.push(details);
      existingDetail.forEach(obj => {
        tempArray.push(obj);
      });
      this.registeredCustomerDetails = tempArray;
      const jsonString = JSON.stringify(tempArray);
      console.log("test", tempArray , jsonString)
      localStorage.setItem('customerDetails', jsonString);
    }
    public sentCustomerRegisteredDetails(){
      console.log(this.registeredCustomerDetails);
      return this.registeredCustomerDetails;
    }
    public getStoredCustomerDetails():any[]  {
      const storedData = localStorage.getItem('customerDetails');
      console.log(storedData)
      return storedData ? JSON.parse(storedData) : [];
    }
    public loginUser(){
      
    }
}
