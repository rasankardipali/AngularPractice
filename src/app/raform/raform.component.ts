import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-raform',
  templateUrl: './raform.component.html',
  styleUrls: ['./raform.component.css']
})
export class RaformComponent implements OnInit {

  myReactiveform: FormGroup;
name: FormControl=new FormControl();
  constructor() {
   this.createForm();
   }

  ngOnInit() {
  }
  OnSubmit(){
    console.log(this. myReactiveform);
    
  }

  createForm(){

    this.myReactiveform = new FormGroup({ 

      'name': new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(5)]),
      'lname':new FormControl('',[Validators.required, Validators.maxLength(10)]),
      'email':new FormControl('',[Validators.required,Validators.email]),
      'age':new FormControl('',[Validators.required,Validators.minLength(17),Validators.maxLength(20)]),  
      
      'phone':new FormControl('',[Validators.minLength(10),Validators.maxLength(10)]),
      'city':new FormControl('Mumbai',Validators.required),
      'gender':new FormControl('Male',Validators.required),
      'password':new FormControl('',[Validators.required,Validators.minLength(8)]),
      'cPassword':new FormControl('',[Validators.required,Validators.minLength(8)])
     })
  }
  
}
