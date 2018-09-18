import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DataService } from '../data.service'
import { Router} from "@angular/router";

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
  constructor( private formBuilder: FormBuilder, private _dataService:DataService, private _router: Router) { }


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

      this._dataService.newUser(this.user)
      this.user = {
        first_name:'',
        last_name: '',
        username: '',
        email: '',
        password:'',
      }
      alert('Success!! Thank your registering')
      this._router.navigateByUrl('/')
    }

    onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
      if (this.registerForm.invalid) {
        return;
      }

      alert('Success!! Thank your registering')
    }

}
