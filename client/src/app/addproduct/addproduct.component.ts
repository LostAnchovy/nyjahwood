import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { Router} from "@angular/router";

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

  constructor(private _dataService:DataService, private _router:Router) { }

  ngOnInit() {
    //for get functions from the dataservice
  }

  newProduct(){
    this._dataService.newProduct(this.product)
    this.product ={
      name:'',
      description:'',
      price:'',
      category: ''
    }
    this._router.navigateByUrl('/admin/dashboard')
  }

}
