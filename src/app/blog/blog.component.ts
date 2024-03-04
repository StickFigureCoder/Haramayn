import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from '../../service/constants.service';
import { RequestsService } from '../../service/requests.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  favorite_product_list: Product[] = [];

  constructor(private request_service: RequestsService) {
    this.request_service.getOurproductsList().subscribe(
      response => { 
        this.favorite_product_list = response.products.map( 
          value => {
             value.thumbnail = "https://dummyjson.com/image/500"; 
             return value; 
            } 
          );
      }
    )
  }
}
