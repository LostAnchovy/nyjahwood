import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
products 
  constructor(private _dataService: DataService) { }

  removeProduct(product, id ){
    this._dataService.removeProduct(product, id);
  }

  ngOnInit() {
    this._dataService.getAllProducts();

    this._dataService.products.subscribe(
      (products)=> {this.products = products;}
    );
  }


}
