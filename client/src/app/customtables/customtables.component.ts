import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
import { Router} from "@angular/router";

@Component({
  selector: 'app-customtables',
  templateUrl: './customtables.component.html',
  styleUrls: ['./customtables.component.css']
})
export class CustomtablesComponent implements OnInit {

products: any = []
  constructor(private _dataService: DataService, _router: Router) { }

  ngOnInit() {
    this._dataService.getCustomTables();

    this._dataService.customtables.subscribe(
      (customtables) => { this.products = customtables}
    );
    
  }

}
