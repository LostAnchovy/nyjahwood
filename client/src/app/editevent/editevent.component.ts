import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-editevent',
  templateUrl: './editevent.component.html',
  styleUrls: ['./editevent.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditeventComponent implements OnInit {
event:any={}
constructor(private _http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getEvent(this.route.snapshot.params['eventId']);
  }

  getEvent(id) {
    this._http.get('/api/event/' + id).subscribe(data => {
      this.event = data;
      console.log(this.event)
    });
  }

}
