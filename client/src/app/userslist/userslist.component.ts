import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service'

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {
users =[];

  constructor(private _dataservice:DataService) { 

  }

  ngOnInit() {
    this._dataservice.getAllUsers();

    this._dataservice.users.subscribe(
      (users)=> {this.users = users;}
    );
  }

}
