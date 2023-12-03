import { Component } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  public orderItems = [
    {
      orderDate: "11/19/2023",
      totalPrice: 36.90,
      orderStatus: "Delivered",
      orderId: "123-1234567-12345",
      orderDetails: [
        {
          item: "Vanilla",
          additionalRequest: "",
          toppings: 3,
          type: "Cup",
          size: "Small",
          price: 3.99,
          count: 3
        },
        {
          item: "Strawberry",
          additionalRequest: "",
          toppings: 5,
          type: "Cup",
          size: "Small",
          price: 4.99,
          count: 2
        },
        {
          item: "Pista",
          additionalRequest: "",
          toppings: 3,
          type: "Cup",
          size: "Small",
          price: 2.99,
          count: 5
        }
      ]
    },
    {
      orderDate: "11/19/2023",
      totalPrice: 36.90,
      orderStatus: "Delivered",
      orderId: "123-1234567-12345",
      orderDetails: [
        {
          item: "Vanilla",
          additionalRequest: "",
          toppings: 3,
          type: "Cup",
          size: "Small",
          price: 3.99,
          count: 3
        },
        {
          item: "Strawberry",
          additionalRequest: "",
          toppings: 5,
          type: "Cup",
          size: "Small",
          price: 4.99,
          count: 2
        },
        {
          item: "Pista",
          additionalRequest: "",
          toppings: 3,
          type: "Cup",
          size: "Small",
          price: 2.99,
          count: 5
        }
      ]
    }
  ];
}
