import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from '../models/Subscription';


@Component({
  selector: 'app-assign12-dec',
  templateUrl: './assign12-dec.component.html',
  styleUrls: ['./assign12-dec.component.css']
})
export class Assign12DecComponent implements OnInit {
  username1=""
  defoltValue="Advanced"
  submitted: boolean = false;

  sub=new Subscription();
  
    constructor() { }

  ngOnInit() {
  } 

  OnSubmit(form:NgForm){
    console.log(form);
    this.submitted=true;
    console.log(form.value.password);

    
    this.sub.Name=form.value. userdetail.username1;
    this.sub.email=form.value. userdetail.email;
    this.sub.password=form.value. userdetail.password;
    this.sub.subscription=form.value.subscription;
   this.saveDetails(this.sub);

  }
saveDetails(sub:Subscription){
  console.log(this.sub);
  
}

}
