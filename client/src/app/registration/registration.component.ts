import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DataService } from '../data.service'
import { Router} from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  user ={
    first_name: '',
    last_name: '',
    email: '',
    username: '',
    password: '',
  }
  message = '';
  result:any
  constructor( private formBuilder: FormBuilder, private _dataService:DataService, private _router: Router, private _http:HttpClient) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username:['',Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }
    get f() { return this.registerForm.controls; }

    newUser() {
      this.submitted = true;

      if (this.registerForm.invalid) {
        return;
      }

      return this._http.post('/api/newuser', this.user).subscribe(res=>{
        this.result= res
          localStorage.setItem('token', this.result.token),
          localStorage.setItem('user', this.result.user.first_name)
          this._router.navigate(['/'])
      }, err =>{
        this.message = err.error.msg;
      })

      // return this._http.post('/api/newuser', this.user).subscribe(res=>{
      //   this.result= res
      //   console.log(this.result)
      //   localStorage.setItem('token', this.result.token)
      //   localStorage.setItem('user', this.result.user.first_name)
      //   this._router.navigate(['/'])
      // },err =>{
      //   this.message = err.error.msg;
      // })
      // this._dataService.newUser(this.user)
      // this.user = {
      //   first_name:'',
      //   last_name: '',
      //   username: '',
      //   email: '',
      //   password:'',
      // }
      // alert('Success!! Thank your registering')
    }

    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error); // log to console instead
        console.log(`${operation} failed: ${error.message}`);
        return of(result as T);
      };
    }

}
