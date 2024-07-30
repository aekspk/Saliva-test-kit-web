import { Component, inject, OnInit } from '@angular/core';
import { productDetails } from '../assets/config/data.config';
import { Product, ProductDetails } from '../assets/config/data.type';
import { ActivatedRoute, Router } from '@angular/router';
import { AddToCartService } from '../assets/service/add-to-cart.service';

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
  // cartList: ProductDetails[] = [];
  cartList: { product: ProductDetails; quantity: number }[] = [];

  //DI
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private addToCartService = inject(AddToCartService);

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

  addToCart(product: ProductDetails | undefined, quantity: number) {
    if (product) {
      this.addToCartService.getProduct$.next({
        product: product,
        quantity: quantity,
      });
    }
  }

  buyNow(product: ProductDetails | undefined, quantity: number) {
    this.router.navigate(['/order-summary', product?.id, this.quantity]);
    if (product) {
      this.addToCartService.getProductBuyNow$.next({
        product: product,
        quantity: quantity,
      });
    }
  }

  navigateToSummary(product: ProductDetails | undefined) {
    this.router.navigate(['/order-summary', product?.id, this.quantity]);
  }
}
