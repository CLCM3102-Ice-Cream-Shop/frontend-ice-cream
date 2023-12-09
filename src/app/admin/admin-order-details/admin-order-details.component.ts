import { Component } from '@angular/core';
import { CommonserviceService } from '../../commonservice.service';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-admin-order-details',
  templateUrl: './admin-order-details.component.html',
  styleUrls: ['./admin-order-details.component.css']
})
export class AdminOrderDetailsComponent {
  public cartItems: any[] = [];

  constructor(private commonservice: CommonserviceService, private httpClient: HttpClient,) { }

  ngOnInit(): void {
    const apiUrl = `${environment.apiPaymentUrl}/order/active`;
    this.httpClient.get<any>(apiUrl).subscribe(
      (response) => {
        if (response && response.data) {
          const mappedData = response.data.map((item: any) => {
            return {
              orderId: item.order_id,
              customerId: item.customer_id,
              cartId: item.cart_id,
              cartDetail: item.cart_detail.map((detail: any) => ({
                cartId: detail.cart_id,
                no: detail.no,
                date: detail.date,
                menuId: detail.menu_id,
                menuName: detail.menu_name,
                price: detail.price,
                quantity: detail.quantity,
                status: detail.status,
                properties: detail.properties,
                additionalRequest: detail.additional_request
              })),
              subTotal: parseFloat(item.sub_total),
              totalAmount: parseFloat(item.total_amount),
              dateTime: new Date(item.date_time),
              status: item.status
            };
          });
    
          this.cartItems = mappedData;
        }
      },
      (error) => {
        console.error("Error can't get active orders", error)
      });
  }

  proceedOrder(orderId: string) {
    const apiUrl = `${environment.apiPaymentUrl}/order/proceed/${orderId}`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.httpClient.post<any>(apiUrl, { headers }).subscribe(
      (response) => {
        console.log("Proceed order success",response)
      },
      (error) => {
        console.error("Error can't proceed order", error)
      });
  }
  
  cancelOrder(orderId: string) {
    const apiUrl = `${environment.apiPaymentUrl}/order/cancel/${orderId}`;
    this.httpClient.delete<any>(apiUrl).subscribe(
      (response) => {
        console.log("Cancel order success", response)
      },
      (error) => {
        console.error("Error can't cancel order", error)
      });
  }
}
