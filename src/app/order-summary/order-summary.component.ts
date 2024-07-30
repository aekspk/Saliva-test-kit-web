import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetails } from '../assets/config/data.type';
import { productDetails } from '../assets/config/data.config';
import { AddToCartService } from '../assets/service/add-to-cart.service';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.scss',
})
export class OrderSummaryComponent implements OnInit {
  productId: string | null = null;
  summaryProduct: ProductDetails | undefined;
  productDetails: ProductDetails[] = productDetails;
  quantity: number = 0;
  totalProductPrice: number = 0;
  total: number = 0;

  //DI
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  addToCartService = inject(AddToCartService);

  constructor() {
    window.scrollTo(0, 0);
  }
  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.quantity = parseInt(this.route.snapshot.paramMap.get('qty') || '0');
    this.summaryProduct = this.productDetails.find(
      (products) => products.id === this.productId
    );

    this.totalProductPrice = parseFloat(
      (this.quantity * (this.summaryProduct?.price || 0)).toFixed(2)
    );
    this.total = parseFloat(
      (this.totalProductPrice + this.totalProductPrice * (10 / 100)).toFixed(2)
    );
  }
}
