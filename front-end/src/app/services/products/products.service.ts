import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiProduct = "http://localhost:3000/products" ; 

  constructor(private http:HttpClient) { }

  getAllProduct() : Observable<any>{
    return this.http.get<Product>(this.apiProduct);
  }

  updateProduct(product : any): Observable<any>{
    return this.http.put(this.apiProduct
      +"/"+ product.id, product);
  }

  deleteProduct(id : number):Observable<any>{
    return this.http.delete(this.apiProduct
      +"/"+ id);
  }
}
