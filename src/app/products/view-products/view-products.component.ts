import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { products } from '../products';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private prodService:ProductService) { }

  productId=0;
  proDetail:any;
  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data=>
      {
        this.productId=data.id;
      
      });

      this.prodService.viewProduct(this.productId).subscribe(prodData=>
        {
             this.proDetail=prodData;  
        });
      }
}