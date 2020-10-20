import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {products} from './products';
import { Observable } from 'rxjs';
import { category } from '../site-framework/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  //telling the method to return a response/data of Observable
  createPoduct(productBody): Observable<products>
  {
    const productUrl= 'http://localhost:3000/products';
    //const productUrl='https://angular-crud-33a3f.firebaseio.com/product.json';
    //also tell the http method to return a data of product method
    return this.httpClient.post<products>(productUrl,productBody);

  }

  getAllProducts(): Observable<products>
  {
    const productUrl= 'http://localhost:3000/products';
    return this.httpClient.get<products>(productUrl);
  }

  viewProduct(productId)
  {
    const productUrl= 'http://localhost:3000/products/'+productId;
    return this.httpClient.get(productUrl);
  }

  updateProduct(productId,productBody): Observable<products>
  {
    const productUrl= 'http://localhost:3000/products/'+productId;
    return this.httpClient.put<products>(productUrl,productBody);
  }

  deleteProduct(productId): Observable<products>
  {
    const productUrl= 'http://localhost:3000/products/'+productId;
    return this.httpClient.delete<products>(productUrl);
  }

  searchCatagoryProducts(catagoryId): Observable<products>
  {
    const productUrl= 'http://localhost:3000/products?productid='+catagoryId;
    return this.httpClient.get<products>(productUrl);
  }

  getCategories():Observable<category>
  {
    const categoryUrl='http://localhost:3000/categories';
    return this.httpClient.get<category>(categoryUrl);
  }
  searchProductsByDate(catagoryId)
  {
    const productUrl= 'http://localhost:3000/products/category='+catagoryId;
    return this.httpClient.get(productUrl);
  }

}
