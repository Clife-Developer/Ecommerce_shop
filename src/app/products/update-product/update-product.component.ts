import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { products } from '../products';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  constructor(private productService:ProductService,
            private activatedRoute:ActivatedRoute) { }

  productId=0; 
  productDetails:any;



  updateProduct(form)
  {
    let updateProd={
      
      id:"",
      name: form.value.Name,
      productid: form.value.CategoryId,
      description:form.value.description,
      productimg: "",
      price: form.value.price,
      is_available: form.value.available,
      rating: form.value.rating,
      vendor_name: "Seller -1",
      warranty: 2

      
    }
    this.productService.updateProduct(this.productId,updateProd).subscribe(data=>
      {});
  }

  
  ngOnInit(): void {
   this.activatedRoute.params.subscribe(data=>
    {
      this.productId=data.id;
    });

    this.productService.viewProduct(this.productId).subscribe(data=>
      {
        this.productDetails=data;
      });
  }

}
