import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
import { Router} from "@angular/router";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customtables',
  templateUrl: './customtables.component.html',
  styleUrls: ['./customtables.component.css']
})
export class CustomtablesComponent implements OnInit {
p: number = 1
products: any = []
productId: any
  constructor(private _dataService: DataService, private _router: Router, private _http: HttpClient) { }

  ngOnInit() {
    this._dataService.getCustomTables();

    this._dataService.customtables.subscribe(
      (customtables) => { this.products = customtables}
    );
    
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
