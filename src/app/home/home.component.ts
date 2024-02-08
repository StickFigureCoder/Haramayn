import { Component } from '@angular/core';
import { HomeCarouselComponent } from '../home-carousel/home-carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeCarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
