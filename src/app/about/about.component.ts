import { Component } from '@angular/core';
import { ProductImage } from '../../service/constants.service';
import { RequestsService } from '../../service/requests.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  about_us_image_list: ProductImage[] = [];

  constructor(private request_service: RequestsService) {
    this.request_service.getLatestArrivalList().subscribe(
      response => {
        this.about_us_image_list = [];
        response.products.map(
          item => {
            this.about_us_image_list.push(
              {
                id: item.id,
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
