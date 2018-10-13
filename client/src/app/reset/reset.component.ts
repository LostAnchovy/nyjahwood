import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { HttpClient} from '@angular/common/http';
import {ActivatedRoute} from "@angular/router";


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
    this._http.get(`/resetpassword/${this.token}`, this.token).subscribe(res=>{
      this.token = res
      console.log(this.token)
    })
  }

}
