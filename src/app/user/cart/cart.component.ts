import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../../commonservice.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  public cartItems: any[] = [];
  public cartId: string = '';
  public discountCode: string = '';

  constructor(private commonservice: CommonserviceService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getCartItems();
  }

  public getCartItems(): void {

    const storedCustomerID = this.commonservice.getStoredCustomerID();

    const apiUrl = `http://localhost:8080/cart/customer/${storedCustomerID}`;

    this.httpClient.get<any>(apiUrl).subscribe(
      (response) => {
        const cartDetail = response.data.cart_detail;
        this.cartId = response.data.cart_id;
        this.cartItems = cartDetail.map((item: any) => ({
          row: item.no,
          item: item.menu_name,
          toppings: [],
          count: item.quantity,
          price: item.price,
          no: item.no
        }));
      },
      (error) => {
      }
    );
  }

  public removeItem(itemRow: any): void {
    const index = this.cartItems.findIndex(item => item.row === itemRow);

    if (index !== -1) {
      const cartId = this.cartId;
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

  public orderNow(): void {
    const request = {
      cart_id: this.cartId,
      discount_code: this.discountCode,
    };

    const apiUrl = `http://localhost:8080/order`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    this.httpClient.post<any>(apiUrl, request, { headers }).subscribe(
      (response) => {
        console.log('Create new order sucess', response);
      },
      (error) => {
        console.error('Error create new order:', error);
      }
    );
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