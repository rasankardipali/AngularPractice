import { Directive } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import{ConfirmPasswordValidator} from "PasswordvalDirective";
//import { FormBuilder } from '@angular/forms';

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
        validator:ConfirmPasswordValidator("password", "confirmPassword")
      }
    );
  }
  onSubmit() {
    this.submitted = true;
  }
}

