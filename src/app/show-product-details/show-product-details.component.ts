import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../models/product.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ShowPoductImagesDialogComponent } from '../show-poduct-images-dialog/show-poduct-images-dialog.component';

import { map } from 'rxjs';
import { ImageProcessingService } from '../image-processing.service';

@Component({
  selector: 'app-show-product-details',
  templateUrl: './show-product-details.component.html',
  styleUrls: ['./show-product-details.component.css']
})
export class ShowProductDetailsComponent implements OnInit {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.


  productDetails1 : Product[]=[];
 displayedColumns: string[] = ['Product ID', 'Product Name', 'Product Description', 'Product Discounted Price','Product Actual Price','Product Category ID','Product Category Name','Images','Edit','Delete'];


  constructor(private productService: ProductService,private router:Router,public imagesDialog:MatDialog,private imageProcessingService:ImageProcessingService){

  }
  ngOnInit(): void {
    this.getAllProducts1();
  }

  public getAllProducts1(){
    this.productService.getAllProducts()
    .pipe(
      map((x:Product[],i)=>x.map((product:Product) => this.imageProcessingService.createImages(product)))
    )
    .subscribe(
      (resp:Product[])=>{
        console.log(resp);
        this.productDetails1=resp;
      },(error:HttpErrorResponse)=>{
        console.log(error);
      }
    );
  }

  deleteProduct(productId: any){
      //console.log(productId);
      this.productService.deleteProduct(productId).subscribe(
        (resp: any) =>{
          //console.log(resp);
          this.getAllProducts1();
        },
        (error:HttpErrorResponse)=>{
          console.log(error);
        }
      );
  }


  editProductDetails(productId: any){
    this.router.navigate(['add-new-product',{productId:productId}]);


  }

  showImages(product: Product){
    //console.log(product);
    this.imagesDialog.open(ShowPoductImagesDialogComponent,{
     data:{
        images: product.productImages
     },

      height:'500px',
      width:'800px'
    });

  }
}
