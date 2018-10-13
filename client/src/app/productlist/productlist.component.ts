import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { Router } from "@angular/router";

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  products: any
  constructor(private _dataService: DataService, private _router: Router) { }

  ngOnInit() {
    this._dataService.getAllProducts();

    this._dataService.products.subscribe(
      (products) => { this.products = products; }
    );
  }
  removeProduct(product, id) {
    this._dataService.removeProduct(product, id)
  }

}
