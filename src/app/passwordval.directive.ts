import { Component,OnInit,Directive } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@Directive({
  selector: '[appPasswordval]'
})
export class PasswordvalDirective {
  registerForm: FormGroup;
  submitted: boolean = false;
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.registerForm = this.fb.group(
      {
        email: ["",Validators.required],
        password: ["",Validators.required],
        confirmPassword: ["",Validators.required]
      },
      {
        validator:confirmPasswordValidator("password", "confirmPassword")
      }
    );
  }
  onSubmit() {
    this.submitted = true;
  }
}

function confirmPasswordValidator(arg0: string, arg1: string): any {
  throw new Error('Function not implemented.');
}

