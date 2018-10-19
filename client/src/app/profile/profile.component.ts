import { Component, OnInit } from '@angular/core';
import {DataService} from  '../data.service'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
user: any
boughtProducts: any = {
  products:[]
}
removedProduct: any
  constructor(private _dataService: DataService, private _http: HttpClient, private _route:Router) { }

  ngOnInit() {
    this.user = localStorage.getItem('user')

    this._http.get('/api/loggedin', this.boughtProducts).subscribe(res=>{
      this.boughtProducts = res
      console.log(this.boughtProducts.products)
    })
  }
  removeProduct(id){
    console.log(id)
    this._http.post(`/api/removeProduct/${id}`, this.removedProduct).subscribe(res=>{
      console.log('removed product',res)
    this.ngOnInit()
    })
  }

}
