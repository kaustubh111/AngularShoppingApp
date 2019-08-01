import { Component, OnInit } from '@angular/core'

import { CartService } from 'src/app/Services/cart.service';
@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})

export class DashBoardComponent implements OnInit {
  ngOnInit() {
  }
  title = 'App';
  name='product'
  description='description';
  constructor(private cartService:CartService)
  {
    
  }

    Products=[{"name":"SmartPhone","price":"340","description":"This is Phone"},
   {"name":"TV","price":"430","description":"This is TV"},
   {"name":"SmartWatch","price":"120","description":"This is a Watch"},
   {"name":"Earphones","price":"65","description":"This is anearpiece"}];

  addToCart(product)
  {
    //alert(product.name +" Added");
    this.cartService.addTocart(product)
  }

   onNotify() {
   alert('Price has been changed');
  }

}
