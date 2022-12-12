import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
 myReactiveform:FormGroup;
  constructor() { }

  ngOnInit() {
   this.createForm();
  }
  OnSubmit(){
    console.log(this.myReactiveform);
    
  }



createForm(){
  this.myReactiveform = new FormGroup({
    'userName': new FormControl('',Validators.required),
    'email':new FormControl('',Validators.required)
  })
}

}
