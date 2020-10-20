import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(private productService:ProductService) { }

  addNewContact(getForm)
  {
    console.log(getForm.value);
    let createProd={
      
      id:"",
      name: getForm.value.Name,
      productid: getForm.value.CategoryId,
      description: getForm.value.description,
      productimg:  getForm.value.link,
      price: getForm.value.price,
      is_available: getForm.value.available,
      rating: getForm.value.rating,
      vendor_name: "Seller -1",
      warranty: 2
    }

    this.productService.createPoduct(createProd).subscribe(data=>
      {});
  }

  
  ngOnInit(): void {
    
  }

}
