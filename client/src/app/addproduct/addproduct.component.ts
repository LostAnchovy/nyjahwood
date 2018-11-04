import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { Router} from "@angular/router";
import { Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  
product ={
  name:'',
  description:'',
  price:'',
  category: ''
}
message = '';

  constructor(private _dataService:DataService, private _router:Router, private _http:HttpClient) { }

  ngOnInit() {
    //for get functions from the dataservice
  }

  // newProduct(){
  //   this._dataService.newProduct(this.product)
  //   this.product ={
  //     name:'',
  //     description:'',
  //     price:'',
  //     category: ''
  //   }
  //   this._router.navigateByUrl('/admin/dashboard')
  // }

  newProduct(){
    this._http.post('/api/newproduct', this.product).subscribe(res=>{
      console.log(res)
      this._router.navigateByUrl('/admin/dashboard')
    },err =>{
      this.message = err.error.msg;
    })
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
