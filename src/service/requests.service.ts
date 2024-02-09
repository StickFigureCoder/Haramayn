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
        img_src: "https://www.kindacode.com/wp-content/uploads/2022/07/flower-1.jpeg",
        name: "Flower 1"
      },
      {
        img_src: "https://www.kindacode.com/wp-content/uploads/2022/07/flower-2.jpeg",
        name: "Flower 2"
      },
      {
        img_src: "https://www.kindacode.com/wp-content/uploads/2022/07/flower-3.jpeg",
        name: "Flower 3"
      },
    ];
  }

  getCatagoryList() {
    return [
      {
        img_src: "https://www.kindacode.com/wp-content/uploads/2022/07/flower-1.jpeg",
        name: "Flower 1"
      },
      {
        img_src: "https://www.kindacode.com/wp-content/uploads/2022/07/flower-2.jpeg",
        name: "Flower 2"
      },
      {
        img_src: "https://www.kindacode.com/wp-content/uploads/2022/07/flower-3.jpeg",
        name: "Flower 3"
      }
    ]
  }

  getLatestArrivalList() {
    return [
      { img_src: "https://www.kindacode.com/wp-content/uploads/2022/07/flower-1.jpeg" },
      { img_src: "https://www.kindacode.com/wp-content/uploads/2022/07/flower-2.jpeg" },
      { img_src: "https://www.kindacode.com/wp-content/uploads/2022/07/flower-3.jpeg" }
    ]
  }

  getOurproductsList() {
    return [
      {
        img_src: "https://www.kindacode.com/wp-content/uploads/2022/07/flower-1.jpeg",
        name: "Flower 1",
        price: 99.99
      },
      {
        img_src: "https://www.kindacode.com/wp-content/uploads/2022/07/flower-2.jpeg",
        name: "Flower 2",
        price: 99.99
      },
      {
        img_src: "https://www.kindacode.com/wp-content/uploads/2022/07/flower-3.jpeg",
        name: "Flower 3",
        price: 99.99
      },
    ]
  }

}
