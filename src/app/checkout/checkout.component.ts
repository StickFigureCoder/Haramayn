import { Component } from '@angular/core';


@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  active: string = "Address";
  toggle_checkbox: boolean = true;

  toAddress() {
    this.active = "Address"
  }

  toShipping() {
    this.active = "Shipping"
  }

  toPayment() {
    this.active = "Payment"
  }

}
