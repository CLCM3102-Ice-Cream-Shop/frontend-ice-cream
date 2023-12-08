import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonserviceService } from 'src/app/commonservice.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  public orderItems: any[] = [];

  constructor(private httpClient: HttpClient, private commonSvc: CommonserviceService) { }
  ngOnInit(): void {

    const storedCustomerID = this.commonSvc.getStoredCustomerID();
    const apiUrl = `http://localhost:8080/order/customer/${storedCustomerID}`;

    this.httpClient.get<any>(apiUrl).subscribe(
      (response) => {
        console.log('Create new order sucess', response);
        this.orderItems = response.data.map((order: any) => {
          return {
            orderDate: new Date(order.date_time).toLocaleDateString(), 
            totalPrice: parseFloat(order.total_amount),
            orderStatus: order.status,
            orderId: order.order_id,
            orderDetails: order.cart_detail.map((detail: any) => ({
              no: detail.no,
              item: detail.menu_name,
              additionalRequest: detail.additional_request, 
              price: parseFloat(detail.price),
              count: detail.quantity
            }))
          };
        });
      },
      (error) => {
        console.error(`Error can't get order detail:`, error);
      }
    );
  }

}
