import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import {AuthService} from '../auth.service'
import { Observable } from 'rxjs/Observable';
import { DataService } from '../data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
user:any 
cartcount = {}
  
constructor(private _router: Router, private _auth: AuthService, private _dataService: DataService) { }

  ngOnInit() {
     this.user = ''
     this.user = localStorage.getItem('user')

     this._dataService.itemCount()

     this._dataService.itemsCount.subscribe(
      (result)=> {this.cartcount = result;}
    );
     console.log(this.cartcount)
  }
  
  logOut(){
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.clear();
    this._router.navigate(['login']);
  }

 
}
