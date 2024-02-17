import { Injectable } from '@angular/core';

// -----------------------------------------------------------------------------
export interface ProductImageAndTitle {
  id: number,
  image: String,
  title: String
}

export interface ProductImageAndTitleResponse {
  id: number,
  images: String[],
  title: String
}
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
export interface ProductImage {
  id: number,
  image: String
}

export interface ProductImageResponse {
  id: number,
  images: String[]
}
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
export interface ProductImageAndTitleAndPrice {
  id: number,
  image: String,
  title: String,
  price: number
}

export interface ProductImageAndTitleAndPriceResponse {
  id: number,
  images: String[],
  title: String,
  price: number
}
// -----------------------------------------------------------------------------


// -----------------------------------------------------------------------------
export interface ProductListResponse<T> {
  limit: number,
  products: T[],
  skip: number,
  total: number,
}

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  public BASE_URL = "https://dummyjson.com"

  public PRODUCTS_URL = this.BASE_URL + "/products";


  constructor() { }

}
