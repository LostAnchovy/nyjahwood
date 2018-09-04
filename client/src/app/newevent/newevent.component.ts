import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { Router} from '@angular/router'

@Component({
  selector: 'app-newevent',
  templateUrl: './newevent.component.html',
  styleUrls: ['./newevent.component.css']
})
export class NeweventComponent implements OnInit {
event ={
  title: '',
  date: '',
  time: '',
  location: '',
  description: '',

}
  constructor(private _dataService: DataService, private _router: Router) { }

  ngOnInit() {

  }

  newEvent() {
    this._dataService.newEvent(this.event)
    this.event = {
      title: '',
      date: '',
      time: '',
      location: '',
      description: '',
    }
    this._router.navigateByUrl('/admin/dashboard/eventslist')
  }

}
