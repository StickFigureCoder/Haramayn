import { Component } from '@angular/core';
import { RequestsService } from '../../service/requests.service';
import { Product } from '../../service/constants.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-your-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './your-cart.component.html',
  styleUrl: './your-cart.component.css'
})
export class YourCartComponent {
  show_return_policy: boolean = true;
  cart_id: number = 0;
  total: number = 0;
  user_cart_product: Product[] = [];

  constructor(private requests_service: RequestsService) {
    
    this.requests_service.getUserCart(1)
    .subscribe(response => {
      this.cart_id = response.carts[0].id;
      this.total = response.carts[0].total;
      this.user_cart_product = response.carts[0].products;
    });

  }

  deleteUserCartProduct(id: number) {
    this.user_cart_product.splice(id, 1);
    this.requests_service.updateUserCart(
      this.cart_id, 
      this.user_cart_product.map( 
        value => {
          
          let p: Product = {
            id: value.id,
            quantity: value.quantity
          }

          return p;
        }
      )
    ).subscribe( response => {
      this.cart_id = response.id;
      this.total = response.total;
      this.user_cart_product = response.products;
    });
  }
}
