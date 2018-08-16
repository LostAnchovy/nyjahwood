import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  users = new BehaviorSubject ([]);
  products = new BehaviorSubject([]);

  constructor(private _http: HttpClient) { }

  getAllUsers(){
    this._http.get('/api/users/all').subscribe((response:any)=>{
      this.users.next(response)
    }) 
  }

  getAllProducts(){
    this._http.get('/api/products/all').subscribe((response:any)=>{
      this.products.next(response)
    })
  }

  newProduct(product) {
    this._http.post('/api/newproduct', product).subscribe(
      (response: any) => { }
    );
  } 
  removeProduct(proudct, id) {
    this._http.delete('/api/product' + id).subscribe(
      (response: any[]) => {
        this.getAllProducts();
       }
    );
  }

}
