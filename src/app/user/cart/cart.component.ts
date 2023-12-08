import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../../commonservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  public cartItems: any[] = [];

  constructor(private commonservice: CommonserviceService, private commonSvc: CommonserviceService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getCartItems();
  }

  public getCartItems(): void {

    const storedCustomerID = this.commonSvc.getStoredCustomerID();

    const apiUrl = `http://localhost:8080/cart/customer/${storedCustomerID}`;

    this.httpClient.get<any>(apiUrl).subscribe(
      (response) => {
        this.cartItems = response.data.map((item: any) => ({
          row : item.no,
          item: item.menu_name, 
          toppings: [], 
          count: item.quantity,
          price: item.price,
          cart_id: item.cart_id 
        }));
      },
      (error) => {
      }
    );
  }

  public removeItem(itemRow: any): void {
    const index = this.cartItems.findIndex(item => item.row === itemRow);
  
    if (index !== -1) {
      const cartId = this.cartItems[index].cart_id;
  
      const apiUrl = `http://localhost:8080/cart/cancel/${cartId}/${this.cartItems[index].row}`;
  
      this.httpClient.delete(apiUrl).subscribe(
        (response) => {
          // On successful removal from the server, update the local cartItems array
          this.cartItems.splice(index, 1);
        },
        (error) => {
          console.error('Error removing item:', error);
        }
      );
    } else {
      console.error('Item with row ' + itemRow + ' not found.');
    }
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
    this.commonservice.updateCart(item);
  }

  public decrement(item: any) {
    if (item.count > 1) {
      item.count--;
      this.commonservice.updateCart(item);
    }
  }
}