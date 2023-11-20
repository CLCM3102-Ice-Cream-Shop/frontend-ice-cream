import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {
  cartItems: any[] = JSON.parse(localStorage.getItem('cartItems') || '[]');

  addToCart(item: any) {
    console.log('Before adding to cart:', this.cartItems);
    const existingItem = this.cartItems.find(cartItem => {
      if (cartItem.flavour === item.flavour && cartItem.type === item.type && cartItem.size === item.size) {
        const toppingCount = cartItem.toppings.filter((obj: any) => item.toppings.some((itemObj: any) => obj.id === itemObj.id));
        return toppingCount.length === item.toppings.length ? true : false;
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
  constructor() { }
}
