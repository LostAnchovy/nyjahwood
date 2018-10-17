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
user:any 


  
constructor(private _router: Router, private _auth: AuthService) { }

  ngOnInit() {
     this.user = ''
     this.user = localStorage.getItem('user')
  }
  
  logOut(){
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.clear();
    this._router.navigate(['login']);
  }

 
}
