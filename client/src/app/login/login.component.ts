import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  authenticationflag: boolean = true
  user ={
     email: '',
     password: '',
  }
  result: any
  constructor(private _dataService: DataService, private formBuilder: FormBuilder, private _http: HttpClient, private _router:Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
 
  }
  get f() { return this.loginForm.controls; }
  
  logIn(){
    this.submitted = true

    if (this.loginForm.invalid) {
      return;
    }

    return this._http.post('/signin', this.user).subscribe(res=>{
      this.result= res
        console.log(this.result.token)
        localStorage.setItem('token', this.result.token)
        this._router.navigateByUrl('/admin/dashboard')
    })
  }
}
