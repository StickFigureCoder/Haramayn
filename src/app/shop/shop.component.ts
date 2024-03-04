import { Component, signal } from '@angular/core';
import { Product } from '../../service/constants.service';
import { RequestsService } from '../../service/requests.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

const LIMIT = 9;

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  shop_products_list = signal<Product[]>([]);
  skip: number = 0
  current_page: number = 1
  total_pages: number = 0
  total_results = 0

  constructor(private requests_service: RequestsService) {
    this.updateProductList();
  }

  updateProductList() {


    this.requests_service.getShopProductsList(LIMIT, this.skip)
    .subscribe( response => {
      
      // Process response into new shoping list.
      var new_list = response.products
      .map( item => { 
        return {
          id: item.id,
          price: item.price,
          thumbnail: "https://dummyjson.com/image/500",
          title: item.title
        }
      });
      
      // Update Shoping List
      this.shop_products_list.set(new_list);


      this.total_results = response.total;

      this.total_pages = response.total / 9;
          
      if ( this.total_pages.toFixed(0) != this.total_pages.toString() ) {
        this.total_pages += 1;
      }
    
    });

  }

  onClickNext() {
    
    this.skip += 9;
    this.current_page += 1;
    if (this.current_page > this.total_pages) {
      this.skip -= 9;
      this.current_page -= 1;
    } else {
      this.updateProductList();
    }
  }

  onClickPrevious() {
    this.skip -= 9;
    this.current_page -= 1;
    
    if (this.current_page == 0) {
      this.skip = 0;
      this.current_page = 1
    } else {
      this.updateProductList();
    }
  }
}
