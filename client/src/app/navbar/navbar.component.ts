import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import {AuthService} from '../auth.service'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
// isAuthenticated:boolean = false;
user:any


  
constructor(private _router: Router, private _auth: AuthService) { }

  ngOnInit() {
     this.user = localStorage.getItem('user')
  }
  
  logOut(){
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    this._router.navigate(['login']);
  }
 
}
