import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { Router} from "@angular/router";

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
products 
  constructor(private _dataService: DataService, private _router:Router) { }

  removeProduct(product, id){
    this._dataService.removeProduct(product, id)
    this._router.navigateByUrl('admin/dashboard')
  }

  navigateHome(){
    this._router.navigateByUrl('/')
  }

  ngOnInit() {
    this._dataService.getAllProducts();

    this._dataService.products.subscribe(
      (products)=> {this.products = products;}
    );
  }


}
