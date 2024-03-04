import { Injectable } from '@angular/core';
import {
  ProductResponse,
  CartResponse,
  Cart,
  Product,
  ConstantsService
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
    let final_url = `${this.constant_service.PRODUCTS_URL}/${id}`;
    return this.http.get<Product>(final_url);
  }

  getSlidesList() {
    let final_url =`${this.constant_service.PRODUCTS_URL}?limit=10&skip=10&select=images,title`;
    return this.http.get<ProductResponse>(final_url);
  }

  getCatagoryList() {
    let final_url =`${this.constant_service.PRODUCTS_URL}?limit=3&skip=10&select=images,title`;
    return this.http.get<ProductResponse>(final_url);
  }

  getLatestArrivalList() {
    let final_url =`${this.constant_service.PRODUCTS_URL}?limit=3&skip=10&select=images`;
    return this.http.get<ProductResponse>(final_url);
  }

  getOurproductsList() {
    let final_url = `${this.constant_service.PRODUCTS_URL}?limit=3&skip=10&select=images,title,price`;
    return this.http.get<ProductResponse>(final_url);
  }

  getShopProductsList(limit: number, skip: number) {
    let final_url = `${this.constant_service.PRODUCTS_URL}?limit=${limit}&skip=${skip}&select=images,title,price'`;
    return this.http.get<ProductResponse>(final_url);
  }

  getUserCart(id: number) {
    let final_url = `${this.constant_service.CARTS_URL}/user/${id}`;
    return this.http.get<CartResponse>(final_url);
  }

  updateUserCart(id: number, products: Product[]) {
    let final_url = `${this.constant_service.CARTS_URL}/${id}`
    return this.http.put<Cart>(final_url,
      {
        merge: false,
        products: products
      }
      );
  }
}
