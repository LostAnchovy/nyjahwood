import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { HttpClient} from '@angular/common/http';
import {ActivatedRoute} from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
token: any
user ={
  password: '',
  cpassword: ''
}
message = ''
  constructor(private _router: Router, private _http: HttpClient, private activatedRoute: ActivatedRoute) {
    // this.route.params.subscribe( params => console.log(params) );
    this.activatedRoute.params.subscribe((params) => {
      this.token = params.token;});
   }

  ngOnInit() {
    this._http.get(`/user/${this.token}`, this.token).subscribe(res=>{
      this.token = res
      console.log(this.token)
    }, err =>{
      this.message = err.error.msg;
    })
  }

  resetpw(){
    this._http.post(`/reset/${this.token}`, this.user).subscribe(res=>{
      console.log(res)

    })
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
