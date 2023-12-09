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
  setCustomerRegisteredDetails(obj: any) {
    this.registeredCustomerDetails.push(obj);
    this.saveCustomerDetailsToLocalStorage();
    console.log(this.registeredCustomerDetails);
  }
  public saveCustomerDetailsToLocalStorage() {
    const jsonString = JSON.stringify(this.registeredCustomerDetails);
    localStorage.setItem('customerDetails', jsonString);
  }
  public sentCustomerRegisteredDetails() {
    console.log(this.registeredCustomerDetails);
    return this.registeredCustomerDetails;
  }
  public getStoredCustomerDetails(): any[] {
    const storedData = localStorage.getItem('customerDetails');
    return storedData ? JSON.parse(storedData) : [];
  }

  public customerID: string | null = null;

  setCustomerID(customerID: string) {
    this.customerID = customerID;
    this.saveCustomerIDToLocalStorage();
    console.log(this.customerID);
  }

  public saveCustomerIDToLocalStorage() {
    if (this.customerID !== null) {
      localStorage.setItem('customerID', this.customerID);
    }
  }

  public getStoredCustomerID(): string | null {
    const storedData = localStorage.getItem('customerID');
    return storedData !== null ? storedData : null;
  }

  public userName: string | null = null;

  setUserName(userName: string) {
    this.userName = userName;
    this.saveUserNameToLocalStorage();
  }

  public saveUserNameToLocalStorage() {
    if (this.userName !== null) {
      localStorage.setItem('userName', this.userName);
    }
  }

  public getStoredUserName(): string | null {
    const storedData = localStorage.getItem('userName');
    return storedData !== null ? storedData : null;
  }
}
