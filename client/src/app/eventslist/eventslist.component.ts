import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
import { Router} from "@angular/router";


@Component({
  selector: 'app-eventslist',
  templateUrl: './eventslist.component.html',
  styleUrls: ['./eventslist.component.css']
})
export class EventslistComponent implements OnInit {
events:any ={}
  constructor(private _dataService:DataService,) { }

  removeEvents(events, id){
    this._dataService.removeEvent(events, id)
  }

  ngOnInit() {
    this._dataService.getAllEvents();

    this._dataService.events.subscribe(
      (events)=> {this.events = events;}
    );
    
  }
 
}
