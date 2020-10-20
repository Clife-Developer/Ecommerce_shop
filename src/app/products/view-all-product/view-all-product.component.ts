import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { products } from '../products';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements OnInit {

  constructor(private prodService:ProductService) { }

  ProdList:products;
  ngOnInit(): void {
    this.prodService.getAllProducts().subscribe(data=>
      {
       this.ProdList=data;
      });
  }

}
