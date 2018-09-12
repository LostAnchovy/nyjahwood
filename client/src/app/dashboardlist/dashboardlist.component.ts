import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboardlist',
  templateUrl: './dashboardlist.component.html',
  styleUrls: ['./dashboardlist.component.css']
})
export class DashboardlistComponent implements OnInit {
count ={}
event = {}
blog ={}
product ={}
  constructor(private _dataService:DataService) { }
 

  ngOnInit() {
    this._dataService.userCount()

    this._dataService.usersCount.subscribe(
      (count)=> {this.count = count;}
    );

    this._dataService.blogCount()

    this._dataService.blogsCount.subscribe(
      (blog)=> {this.blog = blog;}
    );

    this._dataService.eventCount()

    this._dataService.eventsCount.subscribe(
      (event)=> {this.event = event;}
    );

    this._dataService.productCount()

    this._dataService.productsCount.subscribe(
      (product)=> {this.product = product;}
    );



 
  }

}
