import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  
product ={
  name:'',
  description:'',
  price:''
}

  constructor(private _dataService:DataService) { }

  ngOnInit() {
    //for get functions from the dataservice
  }
  newProduct(){
    this._dataService.newProduct(this.product)
    this.product ={
      name:'',
      description:'',
      price:''
    }
  }

}
