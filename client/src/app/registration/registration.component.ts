import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor( private formBuilder: FormBuilder) { }

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

    onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
      if (this.registerForm.invalid) {
        return;
      }

      alert('Success!! Thank your registering')
    }

}
