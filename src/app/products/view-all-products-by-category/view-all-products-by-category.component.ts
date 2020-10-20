import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { category } from 'src/app/site-framework/category';
import { ProductService } from '../product.service';
import { products } from '../products';

@Component({
  selector: 'app-view-all-products-by-category',
  templateUrl: './view-all-products-by-category.component.html',
  styleUrls: ['./view-all-products-by-category.component.css']
})
export class ViewAllProductsByCategoryComponent implements OnInit {

  constructor(private activatedR :ActivatedRoute,
             private prodService:ProductService) { }

  searchCat=0;
  ProdList:products;
  ngOnInit(): void {

    

    this.activatedR.params.subscribe(data=>
      {
        this.searchCat=data.id;
      });


      this.prodService.searchCatagoryProducts(this.searchCat).subscribe(Categorydata=>
        {
         this.ProdList=Categorydata;
        });
    
  }


    
}
