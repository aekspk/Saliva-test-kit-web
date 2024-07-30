import { computed, Injectable, signal } from '@angular/core';
import { Product, ProductDetails } from '../config/data.type';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddToCartService {
  //State
  private _cartList = signal<{ product: ProductDetails; quantity: number }[]>(
    []
  );
  _showCart = signal<boolean>(false);
  private _productBuyNow = signal<
    { product: ProductDetails; quantity: number }[]
  >([]);

  //Action
  getProduct$ = new Subject<{ product: ProductDetails; quantity: number }>();
  getProductBuyNow$ = new Subject<{
    product: ProductDetails;
    quantity: number;
  }>();

  //Selector
  cartList = computed(() => this._cartList());
  showCart = computed(() => this._showCart());
  productBuyNow = computed(() => this._productBuyNow());

  constructor() {
    this.getProduct$.subscribe((product) => {
      this._cartList.update((prev) => [...prev, product]);
      if (this._cartList().length > 0) {
        this._showCart.update(() => true);
      }
    });

    this.getProductBuyNow$.subscribe((product) => {
      this._productBuyNow.update(() => [product]);
    });
  }

  clearProductBuyNow() {
    this._productBuyNow.update(() => []);
  }
}
