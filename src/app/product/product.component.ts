// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-product',
//   templateUrl: './product.component.html',
//   styleUrls: ['./product.component.css']
// })
// export class ProductComponent implements OnInit {
//   products: any[] = [];
//   searchText: string = '';

//   constructor(private http: HttpClient) { }

//   ngOnInit(): void {
//     this.http.get<any[]>('http://localhost:8080/products').subscribe(products => {
//       this.products = products;
//     });
//   }

//   get filteredProducts() {
//     if (!this.searchText) {
//       return this.products;
//     }
//     return this.products.filter(product => product.productName.toLowerCase().includes(this.searchText.toLowerCase()));
//   }
// }

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Product } from '../models/product.model';
import { FileHandle } from '../models/file-handle.model';
import { ProductService } from '../service/product.service';
import { ImageProcessingService } from '../image-processing.service';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  searchText: string = '';
  showLoadButton: any;
  productDetails: Product[]=[];
  cartItems: Product[] = [];
  constructor(private http: HttpClient,private route: Router, private sanitizer: DomSanitizer, private productService: ProductService, private ips: ImageProcessingService) { }

  ngOnInit(): void {
    // this.http.get<Product[]>('http://localhost:8080/products').subscribe(products => {
    //   this.products = products;
    //   // this.setProductImageUrls();
    // });
    this.getAllProducts();
  }

  // setProductImageUrls(): void {
  //   this.products.forEach((product: Product) => {
  //     const fileHandles: FileHandle[] = product.productImages.map((fileHandle: FileHandle) => ({
  //       file: fileHandle.file,
  //       url: fileHandle.url,
  //     }));
  //     product.productImages = fileHandles;
  //   });
  // }

  public getAllProducts(searchKey: string = "") {
    this.productService.getAllProducts()
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

  addToCart(product: Product) {
    this.cartItems.push(product);
  }

  goToCart() {
    this.route.navigate(['/cart'], { queryParams: { cartItems: JSON.stringify(this.cartItems) } });
  }

  get filteredProducts(): Product[] {
    if (!this.searchText) {
      return this.products;
    }
    return this.products.filter(product => product.productName.toLowerCase().includes(this.searchText.toLowerCase()));
  }
}

