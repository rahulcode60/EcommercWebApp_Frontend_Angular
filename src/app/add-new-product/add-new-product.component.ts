import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { NgForm } from '@angular/forms';
import { ProductService } from '../service/product.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FileHandle } from '../models/file-handle.model';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent implements OnInit {

  product:Product ={
    productName: "",
    productDescription: '',
    productDiscountedPrice: 0,
    productActualPrice: 0,
    productCategory: {
      productCategoryId: 0,
      productCategoryName: ""
    },
    productImages:[]
  }

  constructor(private productService:ProductService,
    private sanitize: DomSanitizer, private activatedRoute:ActivatedRoute){

  }

  ngOnInit(): void {
    this.product = this.activatedRoute.snapshot.data['product'];
  }
  addProduct(productForm:NgForm){

    const productFormData =this.prepareFormData(this.product);
    console.log(this.product)
    this.productService.addProduct(productFormData).subscribe(
      (response:Product)=>{
        //console.log(response);
          productForm.reset();
      },
      (error:HttpErrorResponse) =>{
        console.log(error);
      }
    );
  }

  prepareFormData(product:Product):FormData{
    const formData = new FormData();
    formData.append(
      'product',
      new Blob([JSON.stringify(product)], {type:'application/json'})
    );

    for(var i=0;i<product.productImages.length;i++){
      formData.append(
        'imageFile',
        product.productImages[i].file,
        product.productImages[i].file.name
      );
    }
    return formData;
  }

  onFileSelected(event: Event){
    const target = event.target as HTMLInputElement;
    if(target.files){
     const file =target.files[0];

     const fileHandle:FileHandle={
      file:file,
      url: this.sanitize.bypassSecurityTrustHtml(window.URL.createObjectURL(file))
     }
     this.product.productImages.push(fileHandle);


    }
  }

  removeImages(i:number){
    this.product.productImages.splice(i,1);
  }
}
