import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private customerData = new BehaviorSubject<any>(null);
  customerData$ = this.customerData.asObservable();

  setCustomerData(data: any) {
    this.customerData.next(data);
  }

  getCustomerData() {
    return this.customerData.getValue();
  }

  clearCustomerData() {
    this.customerData.next(null);
  }

  constructor() {}
}