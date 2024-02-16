import { Component } from '@angular/core';
import { HomeCarouselComponent } from '../home-carousel/home-carousel.component';
import { RequestsService } from '../../service/requests.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductImage, ProductImageAndTitle, ProductImageAndTitleAndPrice } from '../../service/constants.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeCarouselComponent, CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  categories_list: ProductImageAndTitle[] = [];
  latest_arrivals_list: ProductImage[] = []
  our_products_list: ProductImageAndTitleAndPrice[] = [];

  constructor(private requests_service: RequestsService) {
    
    // Get Catagory List
    this.requests_service.getCatagoryList()
    .subscribe( 
      response => { 
        this.categories_list = [];
        response.products.map( item => {   
          
          this.categories_list.push({
            id: item.id,
            // image: item.images[0],
            image: "https://dummyjson.com/image/500",
            title: item.title
          }); 
        
        })
      });
    
    // Get Latest Arrival
    this.requests_service.getLatestArrivalList()
    .subscribe( 
      response => { 
        this.latest_arrivals_list = [];
        response.products.map( item => {   
          
          this.latest_arrivals_list.push({
            id: item.id,
            // image: item.images[0],
            image: "https://dummyjson.com/image/400x600"
          }); 
        
        })
      });
    
    // Get Product List
    this.requests_service.getOurproductsList()
    .subscribe( 
      response => { 
        this.our_products_list = [];
        response.products.map( item => {
          
          this.our_products_list.push({
            id: item.id,
            // image: item.images[0],
            image: "https://dummyjson.com/image/500",
            title: item.title,
            price: item.price
          }); 
        
        })
      });
  }

}
