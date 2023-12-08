import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../customer.service';
import { CommonserviceService } from 'src/app/commonservice.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  customerData: any = {
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    password: '',
    confirm_password: '',
  };


  constructor(private customerService: CustomerService, private dataService: CommonserviceService, private httpClient: HttpClient) { }
  public isEditing: boolean = false;
  ngOnInit() {
    const details = this.dataService.getStoredCustomerDetails() || {};
    this.customerData.first_name = details[0].first_name;
    this.customerData.last_name = details[0].last_name;
    this.customerData.email = details[0].email;
    this.customerData.phone = details[0].phone;
    this.customerData.password = details[0].password;
    this.customerData.confirm_password = details[0].confirm_password;


    console.log(this.customerData)
  }

  updateProfile() {

    // this.customerService.setCustomerData(this.customerData);
  }
}
