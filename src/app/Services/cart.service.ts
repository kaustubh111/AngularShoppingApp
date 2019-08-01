import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  getShippingCosts(){
    return this.http.get('/assets/shipping.json');
  }

  constructor(private http : HttpClient) { }
  items=[];
  prodCount:any;

  addTocart(product)
  {
    this.items.push(product);
  }
  getItems() {
    return this.items;
  }

  clearCart()
  {
    this.items=[];
    this.prodCount=this.prodCount+1;
    return this.items;
  }

 
}
