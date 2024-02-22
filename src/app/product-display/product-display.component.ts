import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestsService } from '../../service/requests.service';
import { SingleProductResponse } from '../../service/constants.service';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-display.component.html',
  styleUrl: './product-display.component.css',
})
export class ProductDisplayComponent {
  product_details: SingleProductResponse = {
    id: 0,
    title: '',
    description: '',
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: '',
    category: '',
    thumbnail: '',
    images: [],
  };

  constructor(
    private route: ActivatedRoute,
    private request_service: RequestsService
  ) {
    this.route.params.subscribe({
      next: (value) => this.updateProduceDetails(value["id"])
    });
  }

  updateProduceDetails(product_id: number) {
    this.request_service.getProductFromId(product_id).subscribe({
      next: response => this.product_details = response
    });
  }
}
