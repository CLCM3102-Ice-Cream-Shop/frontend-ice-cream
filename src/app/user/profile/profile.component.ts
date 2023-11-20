import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../customer.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  customerData: any = {};
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phoneNumber: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.customerData = this.customerService.getCustomerData() || {};
  }

  updateProfile() {
    // You can add additional logic here to update the customer profile on the server
    // For now, let's just update the local data
    this.customerService.setCustomerData(this.customerData);
  }
}
