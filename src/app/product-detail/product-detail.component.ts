import { Component, inject, OnInit } from '@angular/core';
import { productDetails } from '../assets/config/data.config';
import { Product, ProductDetails } from '../assets/config/data.type';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent implements OnInit {
  productDetails: ProductDetails[] = productDetails;
  productId: string | null = null;
  selectProduct: ProductDetails | undefined;
  quantity = 1;

  //DI
  private route = inject(ActivatedRoute);
  //DI
  private router = inject(Router);

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.productId = this.route.snapshot.paramMap.get('id');
    this.selectProduct = this.productDetails.find(
      (products) => products.id === this.productId
    );
  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  navigateToSummary(product: ProductDetails | undefined) {
    this.router.navigate(['/order-summary', product?.id, this.quantity]);
  }
}
