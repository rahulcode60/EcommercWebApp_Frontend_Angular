import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:8080/products/category';

  constructor(private http: HttpClient) { }

  getProductsByCategoryId(categoryId: number): Observable<any[]> {
    const url = `${this.apiUrl}/${categoryId}`;
    return this.http.get<any[]>(url);
  }

  public addProduct(product:FormData){
    return this.http.post<Product>("http://localhost:8080/admin/addproduct",product);
  }

  public getAllProducts() {
    return this.http.get<Product[]>("http://localhost:8080/admin/showallProduct");
  }

  public deleteProduct(productId:number){
    return this.http.delete("http://localhost:8080/admin/deleteProductDetails/"+productId);
  }

  public getProductDetailsById(productId: any){
    return this.http.get<Product>("http://localhost:8080/admin/getProductDetailsById/"+productId)
  }
}
