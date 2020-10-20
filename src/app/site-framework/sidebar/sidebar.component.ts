import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../products/product.service';
import { category } from '../category';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private prod:ProductService) { }

  CatList:category;
  
  ngOnInit(): void {
    this.prod.getCategories().subscribe(data=>
      {
       this.CatList=data;
      });
  }

}
