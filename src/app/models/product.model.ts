import { FileHandle } from "./file-handle.model"
import { ProductCategory } from "./product.category";

export interface Product{
  productName: string,
  productDescription:string,
  productDiscountedPrice:number,
  productActualPrice:number,
  productCategory: ProductCategory;
  productImages:FileHandle[]

}
