import { Injectable } from '@angular/core';
import { ConstantsService, ProductListResponse, ProductImageAndTitle, ProductImageAndTitleResponse, ProductImageResponse, ProductImage, ProductImageAndTitleAndPrice, ProductImageAndTitleAndPriceResponse } from './constants.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private constant_service: ConstantsService, private http: HttpClient) { }

  getSlidesList() {
    let final_url = this.constant_service.PRODUCTS_URL + "?limit=10&skip=10&select=images,title"
    var output_list: ProductImageAndTitle[] = [];
    
    this.http
    .get<ProductListResponse<ProductImageAndTitleResponse>>(final_url)
    .subscribe( 
      response => { 
        response.products.map( item => {   
          
          output_list.push({
            id: item.id,
            image: item.images[0],
            title: item.title
          }); 
        
        })
      });
    
    return output_list
  }

  getCatagoryList() {
    let final_url = this.constant_service.PRODUCTS_URL + "?limit=3&skip=10&select=images,title"
    var output_list: ProductImageAndTitle[] = [];
    
    this.http
    .get<ProductListResponse<ProductImageAndTitleResponse>>(final_url)
    .subscribe( 
      response => { 
        response.products.map( item => {   
          
          output_list.push({
            id: item.id,
            image: item.images[0],
            title: item.title
          }); 
        
        })
      });
    
    return output_list
  }

  getLatestArrivalList() {
    let final_url = this.constant_service.PRODUCTS_URL + "?limit=3&skip=10&select=images"
    var output_list: ProductImage[] = [];
    
    this.http
    .get<ProductListResponse<ProductImageResponse>>(final_url)
    .subscribe( 
      response => { 
        response.products.map( item => {   
          
          output_list.push({
            id: item.id,
            image: item.images[0]
          }); 
        
        })
      });
    
    return output_list
  }

  getOurproductsList() {
    let final_url = this.constant_service.PRODUCTS_URL + "?limit=3&skip=10&select=images"
    var output_list: ProductImageAndTitleAndPrice[] = [];
    
    this.http
    .get<ProductListResponse<ProductImageAndTitleAndPriceResponse>>(final_url)
    .subscribe( 
      response => { 
        response.products.map( item => {   
          
          output_list.push({
            id: item.id,
            image: item.images[0],
            title: item.title,
            price: item.price
          }); 
        
        })
      });
    
    return output_list
  }

}
