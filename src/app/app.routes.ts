import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { Hero2Component } from './hero2/hero2.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    children: [
      {
        path: 'product-detail/:id',
        component: ProductDetailComponent,
      },
      {
        path: '',
        component: Hero2Component,
      },
      { path: `order-summary/:id/:qty`, component: OrderSummaryComponent },
    ],
  },
];
