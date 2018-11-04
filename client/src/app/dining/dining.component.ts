import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
import { Router} from "@angular/router";
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-dining',
  templateUrl: './dining.component.html',
  styleUrls: ['./dining.component.css']
})
export class DiningComponent implements OnInit {
p: number = 1;
products: any =[]
productId: any
  constructor(private _dataService: DataService, private _router: Router, private _http: HttpClient) { }

  ngOnInit() {
    this._dataService.getDiningCollection()
    
    this._dataService.diningcollection.subscribe((res)=>{
      this.products = res
    })

  }

  addProduct(id){
    var token = localStorage.getItem('token')
    if(!token){
      this._router.navigate[('login')]
    }
    this._http.post(`/api/user/${id}`, this.productId).subscribe(res=>{
      console.log(res)
    })
    
}
  


}
