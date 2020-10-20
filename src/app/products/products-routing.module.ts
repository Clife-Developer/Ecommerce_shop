import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ProductsComponent } from './products.component';
import { ProductsModule } from './products.module';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { ViewAllProductsByCategoryComponent } from './view-all-products-by-category/view-all-products-by-category.component';
import { ViewAllProductsByDateComponent } from './view-all-products-by-date/view-all-products-by-date.component';


import { ViewProductsComponent } from './view-products/view-products.component';

const routes: Routes = [
  { path: '',component:ViewAllProductComponent },
  { path: 'products',component:ViewAllProductComponent },
  { path: 'create-product',component:CreateProductComponent },
  { path: 'product/:id',component:ViewProductsComponent },
  { path: 'category/:id',component:ViewAllProductsByCategoryComponent },
  { path: 'search',component:ViewAllProductsByDateComponent},
  { path: 'update-product/:id',component:UpdateProductComponent},
  { path: 'delete-product/:id',component:DeleteProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
