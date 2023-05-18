import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegisterComponent } from './register/register.component';
import { Header1Component } from './header1/header1.component';
import { ProductResolveService } from './service/product-service.service';
import { ShowProductDetailsComponent } from './show-product-details/show-product-details.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path:"",component:HeaderComponent},
  {path:"users",component:UsersComponent},
  {path:"product",component:ProductComponent},
  {path:"product-list",component:ProductListComponent},
  {path:'add-new-product', component:AddNewProductComponent,resolve:{product:ProductResolveService}},
  {path:"adminheader",component:AdminheaderComponent},
  {path:"login",component:LoginComponent},
  {path:"loginsuccess",component:LoginsuccessComponent},
  {path:"register",component:RegisterComponent},
  {path:"header1",component:Header1Component},
  // {path:'addNewProduct', component:AddNewProductComponent ,
  //  resolve:{product:ProductResolveService} },
  {path:'show-product-details', component:ShowProductDetailsComponent},
  {path:"cart",component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
