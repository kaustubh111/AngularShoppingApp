import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { DashBoardComponent } from './Components/home/dash-board/dash-board.component';
import { RouterModule } from '@angular/router';
import { ProductAlertsComponent } from './Components/home/product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './Components/home/product-details/product-details.component';
import { CartComponent } from './Components/home/cart/cart.component';
import { ShippingComponentComponent } from './Components/home/shipping-component/shipping-component.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashBoardComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot([{path: '',component: DashBoardComponent},
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent},
      { path: 'shipping', component: ShippingComponentComponent },
  ])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
