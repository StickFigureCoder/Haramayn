import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductImageAndTitleAndPrice } from '../../service/constants.service';
import { RequestsService } from '../../service/requests.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  favorite_product_list: ProductImageAndTitleAndPrice[] = [];

  constructor(private request_service: RequestsService) {
    this.request_service.getOurproductsList().subscribe(
      response => {
        this.favorite_product_list = [];
        response.products.map(
          item => {
            this.favorite_product_list.push(
              {
                id: item.id,
                title: item.title,
                price: item.price,
                // image: item.images[0],
                image: "https://dummyjson.com/image/500"
              }
            )
          }
        )
      }
    )
  }
}
