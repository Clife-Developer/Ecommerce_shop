import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { ViewAllProductsByCategoryComponent } from './view-all-products-by-category/view-all-products-by-category.component';
import { ViewAllProductsByDateComponent } from './view-all-products-by-date/view-all-products-by-date.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductsComponent,
     CreateProductComponent,
      DeleteProductComponent,
       UpdateProductComponent,
        ViewAllProductComponent,
         ViewAllProductsByCategoryComponent,
          ViewAllProductsByDateComponent, 
          ViewProductsComponent
        ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule
  ]
})

export class ProductsModule { }
