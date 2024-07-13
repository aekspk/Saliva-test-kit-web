import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { products } from '../assets/config/data.config';
import { brand } from '../assets/config/data.config';
import { Brand } from '../assets/config/data.type';
import { Product } from '../assets/config/data.type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero2',
  standalone: true,
  imports: [FormsModule, MatCheckboxModule],
  templateUrl: './hero2.component.html',
  styleUrl: './hero2.component.scss',
})
export class Hero2Component {
  products: Product[] = products;
  brands: Brand[] = brand;
  filteredProducts: Product[] = [];
  selectedSortOption = 'newest';

  //DI
  private router = inject(Router);

  constructor() {
    this.filterProducts();
  }

  filterProducts() {
    this.filteredProducts = this.products.filter((product) =>
      this.brands
        .filter((brand) => brand.checked)
        .map((brand) => brand.name)
        .includes(product.brand)
    );
    this.filteredProducts[0] ? this.sortFilter() : this.sortProducts();

    for (const brand of this.brands) {
      console.log(`${brand.name} is checked: ${brand.checked}`);
    }
  }

  navigateToProduct(product: Product) {
    this.router.navigate(['/product-detail', product.id]);
  }

  sortProducts() {
    if (this.selectedSortOption === 'asc') {
      this.products.sort((a, b) => a.price - b.price);
    } else if (this.selectedSortOption === 'desc') {
      this.products.sort((a, b) => b.price - a.price);
    } else {
      this.products.sort((a, b) => b.date.localeCompare(a.date));
    }
  }

  sortFilter() {
    if (this.selectedSortOption === 'asc') {
      this.filteredProducts.sort((a, b) => a.price - b.price);
    } else if (this.selectedSortOption === 'desc') {
      this.filteredProducts.sort((a, b) => b.price - a.price);
    } else {
      this.filteredProducts.sort((a, b) => b.date.localeCompare(a.date));
    }
  }

  onBrandChange() {
    this.filterProducts();
  }
}
