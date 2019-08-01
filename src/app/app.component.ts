import { Component } from '@angular/core';
import { ProductDetailsComponent} from './Components/home/product-details/product-details.component'

@Component({
  selector: 'app-root',
  //templateUrl: './Components/home/home.component.html',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  prCount : any;
  
  //this.prCount= ProductDetailsComponent.getProdCount();
}
