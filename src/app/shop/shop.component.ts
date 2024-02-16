import { Component } from '@angular/core';
import { ProductImageAndTitleAndPrice, ShopProductOutputList } from '../../service/constants.service';
import { RequestsService } from '../../service/requests.service';
import { CommonModule } from '@angular/common';

const LIMIT = 9;

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  shop_products_list: ProductImageAndTitleAndPrice[] = [];
  skip = 0
  current_page = 1
  total_pages = 0
  total_results = 0

  constructor(private requests_service: RequestsService) {
    this.updateProductList();
  }

  updateProductList() {
    this.requests_service.getShopProductsList(LIMIT, this.skip).subscribe( 
      response => {
        this.shop_products_list = [];

        response.products.map( item => {   

          this.shop_products_list.push({
            id: item.id,
            // image: item.images[0],
            image: "https://dummyjson.com/image/250",
            title: item.title,
            price: item.price
          }); 

          this.total_results = response.total;

          this.total_pages = response.total / 9;
          
          if ( this.total_pages.toFixed(0) != this.total_pages.toString() ) {
            this.total_pages += 1;
          }
        })
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
