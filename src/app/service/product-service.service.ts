import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { ActivatedRouteSnapshot,Resolve,RouterStateSnapshot } from '@angular/router';
import { Observable, map, of } from 'rxjs';
import { ProductService } from './product.service';
import { ImageProcessingService } from '../image-processing.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolveService implements Resolve<Product> {

  constructor(private productService:ProductService, private imageProcessingService:ImageProcessingService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<Product> {
    const id = route.paramMap.get("productId");

    if(id){
      //fetch details
     return  this.productService.getProductDetailsById(id)
         .pipe(
          map(p=> this.imageProcessingService.createImages(p))
         );
    }
    else{
      //return empty product obs
      return of(this.getProductDetails());
    }
  }

  getProductDetails(){
    return{
      productName: "",
    productDescription: '',
    productDiscountedPrice: 0,
    productActualPrice: 0,
    productCategory: {
      productCategoryId: 0,
      productCategoryName: ""
    },
    productImages:[]
    };

  }
}
