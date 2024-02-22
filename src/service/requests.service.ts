import { Injectable } from '@angular/core';
import {
  ConstantsService,
  ProductListResponse,
  ProductImageAndTitleResponse,
  ProductImageResponse,
  ProductImageAndTitleAndPriceResponse,
  SingleProductResponse,
} from './constants.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RequestsService {
  constructor(
    private constant_service: ConstantsService,
    private http: HttpClient
  ) {}

  getProductFromId(id: number) {
    let final_url = this.constant_service.PRODUCTS_URL + "/" + id;    
    return this.http.get<SingleProductResponse>(final_url);
  }

  getSlidesList() {
    let final_url =
      this.constant_service.PRODUCTS_URL +
      '?limit=10&skip=10&select=images,title';
    return this.http.get<ProductListResponse<ProductImageAndTitleResponse>>(
      final_url
    );
  }

  getCatagoryList() {
    let final_url =
      this.constant_service.PRODUCTS_URL +
      '?limit=3&skip=10&select=images,title';
    return this.http.get<ProductListResponse<ProductImageAndTitleResponse>>(
      final_url
    );
  }

  getLatestArrivalList() {
    let final_url =
      this.constant_service.PRODUCTS_URL + '?limit=3&skip=10&select=images';
    return this.http.get<ProductListResponse<ProductImageResponse>>(final_url);
  }

  getOurproductsList() {
    let final_url =
      this.constant_service.PRODUCTS_URL +
      '?limit=3&skip=10&select=images,title,price';
    return this.http.get<
      ProductListResponse<ProductImageAndTitleAndPriceResponse>
    >(final_url);
  }

  getShopProductsList(limit: number, skip: number) {
    let final_url =
      this.constant_service.PRODUCTS_URL +
      '?limit=' +
      limit +
      '&skip=' +
      skip +
      '&select=images,title,price';
    return this.http.get<
      ProductListResponse<ProductImageAndTitleAndPriceResponse>
    >(final_url);
  }
}
