import { CommonModule } from '@angular/common';
import { Component, OnChanges } from '@angular/core';
import { RequestsService } from '../../service/requests.service';
import { Product } from '../../service/constants.service';

@Component({
  selector: 'app-home-carousel',
  standalone: true,
  imports: [CommonModule],
  providers: [RequestsService],
  templateUrl: './home-carousel.component.html',
  styleUrl: './home-carousel.component.css'
})
export class HomeCarouselComponent implements OnChanges {
  slidelist: Product[] = [];
  slideIndex: number = 1;

  constructor(private request_service: RequestsService) {
    this.request_service.getSlidesList()
    .subscribe( 
      response => { 
        this.slidelist = [];
        response.products.map( item => {   
          
          this.slidelist.push({
            id: item.id,
            thumbnail: "https://dummyjson.com/image/1080x540",
            title: item.title
          }); 
        
        })
      });
  }

  ngOnChanges(): void {
    this.showSlide(this.slideIndex);
  }

  // change slide with the prev/next button
  moveSlide(moveStep: number) {
      this.showSlide(this.slideIndex += moveStep);
  }

  // change slide with the dots
  currentSlide(n: number) {
      this.showSlide(this.slideIndex = n);
  }

  showSlide(n: number) {
      const slides = document.getElementsByClassName("slide");
      
      if (n > slides.length) { this.slideIndex = 1 }
      if (n < 1) { this.slideIndex = slides.length }

      // hide all slides
      for (let i = 0; i < slides.length; i++) {
          slides[i].classList.add('hidden');
      }

      // show the active slide
      slides[this.slideIndex - 1].classList.remove('hidden');
  }

}
