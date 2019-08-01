import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-shipping-component',
  templateUrl: './shipping-component.component.html',
  styleUrls: ['./shipping-component.component.css']
})
export class ShippingComponentComponent implements OnInit {

  shippingCosts;
  constructor(private cartService : CartService) { 
    this.shippingCosts=this.cartService.getShippingCosts()
  }
  
  ngOnInit() {

  }

 

 


}
