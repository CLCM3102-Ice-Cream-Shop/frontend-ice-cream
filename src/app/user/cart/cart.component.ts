import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../../commonservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  public cartItems: any[] = [];

  constructor(private commonservice: CommonserviceService) { }

  ngOnInit(): void {
    this.getCartItems();
  }

  public getCartItems(): void {
    this.cartItems = this.commonservice.getCartItems();
  }

  public removeItem(index: number): void {
    this.commonservice.removeFromCart(index);
    this.getCartItems();
  }

  public clearCart(): void {
    this.commonservice.clearCart();
    this.getCartItems();
  }

  public getTotalPrice(): number {
    let price = 0;
    this.cartItems.forEach((item: any) => {
      price += item.count * item.price;
    });
    return price;
  }

  public increment(item: any) {
    item.count++;
  }

  public decrement(item: any) {
    if (item.count > 1) {
      item.count--;
    }
  }
}