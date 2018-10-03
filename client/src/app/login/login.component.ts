import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  user ={
     email: '',
     password: '',
  }
  message = '';
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
    }, err =>{
      this.message = err.error.msg;
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
