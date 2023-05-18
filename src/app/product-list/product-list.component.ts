import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../service/product.service';
import { map } from 'rxjs';
import { Product } from '../models/product.model';
import { ImageProcessingService } from '../image-processing.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  categoryId: any;
  products: any[] = [];
  searchText: any;
  productDetails: Product[]=[];
  cartItems: Product[] = [];
  
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private ips: ImageProcessingService,private router: Router
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.categoryId = params['categoryId'];
      this.getProductsByCategoryId();
    });
  }

  getProductsByCategoryId(): void {
    if (this.categoryId) {
      this.productService.getProductsByCategoryId(this.categoryId)
      .pipe(
        map((x: Product[], i) => x.map((product: Product) => this.ips.createImages(product)))
      )
      .subscribe(
        (resp: Product[]) => {
          console.log(resp);
          this.productDetails=resp;
        }, (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
}
  }

  addToCart(product: Product) {
    this.cartItems.push(product);
  }

  goToCart() {
    this.router.navigate(['/cart'], { queryParams: { cartItems: JSON.stringify(this.cartItems) } });
  }

  get filteredProducts(): Product[] {
    if (!this.searchText) {
      return this.products;
    }
    return this.products.filter(product => product.productName.toLowerCase().includes(this.searchText.toLowerCase()));
  }
}


// getProductsByCategoryId(): void {
//   if (this.categoryId) {
//     this.productService.getProductsByCategoryId(this.categoryId)
//       .subscribe(products => this.products = products);
//   }
// }
// }
