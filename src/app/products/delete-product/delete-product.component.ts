import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { products } from '../products';


@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private productService:ProductService) { }


  
  productId=0;
 
  deleteProduct()
  {
    
    this.productService.deleteProduct(this.productId).subscribe(data=>{});
    
  }

  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>
      {
        this.productId=data.id;
      });
  }

}
