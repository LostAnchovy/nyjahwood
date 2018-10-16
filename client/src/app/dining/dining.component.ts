import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
import { Router} from "@angular/router";

@Component({
  selector: 'app-dining',
  templateUrl: './dining.component.html',
  styleUrls: ['./dining.component.css']
})
export class DiningComponent implements OnInit {
products: any =[]

  constructor(private _dataService: DataService, _router: Router) { }

  ngOnInit() {
    this._dataService.getDiningCollection()
    
    this._dataService.diningcollection.subscribe((res)=>{
      this.products = res
    })

  }
  


}
