import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service'

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {
users =[];

  constructor(private _dataService:DataService) { }
  
  removeUser(user, id){
    this._dataService.removeUser(user, id)
  }

  ngOnInit() {
    this._dataService.getAllUsers();

    this._dataService.users.subscribe(
      (users)=> {this.users = users;}
    );
  }

}
