import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
events
  constructor(private _dataService:DataService) { }

  ngOnInit() {
    this._dataService.getAllEvents();

    this._dataService.events.subscribe(
      (events)=> {this.events = events;}
    );
  }

}
