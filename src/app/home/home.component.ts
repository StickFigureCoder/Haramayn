import { Component } from '@angular/core';
import { HomeCarouselComponent } from '../home-carousel/home-carousel.component';
import { RequestsService } from '../../service/requests.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeCarouselComponent, CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  categories_list: { img_src: String, name: String }[] = [];
  latest_arrivals_list: { img_src: String }[] = []
  our_products_list: { img_src:String, name: String, price: number }[] = [];

  constructor(private requests_service: RequestsService) {
    this.categories_list = this.requests_service.getCatagoryList();
    this.latest_arrivals_list = this.requests_service.getLatestArrivalList();
    this.our_products_list = this.requests_service.getOurproductsList();
  }

}
