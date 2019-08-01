import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashBoardComponent } from '../dash-board/dash-board.component';
import { CartService } from '../../../Services/cart.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
 
  product;
  private cartService : CartService
  prodCount:any;

  constructor(
    private route: ActivatedRoute,
    
  ) { }
  get getProdCount()
    {
      return this.prodCount;
    }
  share()
  {
    alert("Product Has Been Shared");
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    this.product = new DashBoardComponent(this.cartService).Products[+params.get('productId')];
  });
  }


  

  

}
