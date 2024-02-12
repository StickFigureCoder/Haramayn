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
    this.categories_list = this.requests_service.getCatagoryList();
    this.latest_arrivals_list = this.requests_service.getLatestArrivalList();
    this.our_products_list = this.requests_service.getOurproductsList();
  }

}
