import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
import { Router} from "@angular/router";
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-stools',
  templateUrl: './stools.component.html',
  styleUrls: ['./stools.component.css']
})
export class StoolsComponent implements OnInit {
p: number = 1;
products: any =[]
productId: any
  constructor(private _dataService: DataService, private _router: Router, private _http: HttpClient) { }

  ngOnInit() {
    this._dataService.getStools()

    this._dataService.stools.subscribe(
      (stools)=> this.products = stools)
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
