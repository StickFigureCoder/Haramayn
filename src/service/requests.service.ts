import { Injectable } from '@angular/core';
import { ConstantsService } from './constants.service';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private constant_service: ConstantsService) { }

  getSlidesList() {
    return [
      {
        src: "https://www.kindacode.com/wp-content/uploads/2022/07/flower-1.jpeg",
        text: "Flower 1"
      },
      {
        src: "https://www.kindacode.com/wp-content/uploads/2022/07/flower-2.jpeg",
        text: "Flower 2"
      },
      {
        src: "https://www.kindacode.com/wp-content/uploads/2022/07/flower-3.jpeg",
        text: "Flower 3"
      },
    ];
  }

}
