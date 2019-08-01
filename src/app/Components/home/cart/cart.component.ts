import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../Services/cart.service';
import { FormBuilder } from '@angular/forms';
import { FormGroup,ReactiveFormsModule } from '@angular/forms'


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items:any=[];
  stat:boolean=false;
  checkoutTrue:boolean=false;
  checkoutForm;
  constructor( private cartService: CartService,
               private formBuilder: FormBuilder
    ) {
    
    this.items =this.cartService.getItems();
    this.checkoutForm=this.formBuilder.group({
      name:'',
      address:''
    });
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

  checkout()
  {
    this.checkoutTrue=true;
  }

  undoCheckout()
  {
    this.checkoutTrue=false;
    this.items = this.cartService.clearCart();
  }

  ngOnInit() {
    console.log(this.checkoutForm.name+this.checkoutForm.address);
  }

}
