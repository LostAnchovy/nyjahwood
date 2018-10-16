import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
import { Router} from "@angular/router";

@Component({
  selector: 'app-stools',
  templateUrl: './stools.component.html',
  styleUrls: ['./stools.component.css']
})
export class StoolsComponent implements OnInit {
products: any =[]
  constructor(private _dataService: DataService, private _router: Router) { }

  ngOnInit() {
    this._dataService.getStools()

    this._dataService.stools.subscribe(
      (stools)=> this.products = stools)
  }

}
