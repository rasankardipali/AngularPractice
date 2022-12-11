import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from '../models/student';

@Component({
  selector: 'app-assign8-des',
  templateUrl: './assign8-des.component.html',
  styleUrls: ['./assign8-des.component.css']
})
export class Assign8DesComponent implements OnInit {
  defoltValue2="D.Y.Patil";
  defoltValue1="IT";
  submitted: boolean = false;
  stud=new Student;
  Student: Student;
 
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
console.log(form);
this.submitted=true;
console.log(form.value.username);

this.stud.UserName=form.value.username;
this.stud.Gender=form.value.Gender;
this.stud.Date=form.value.Date;
this.stud.Address=form.value.AddressDetail.Address;
this.stud.City=form.value.AddressDetail.City;
this.stud.State=form.value.AddressDetail.State;
this.stud.College=form.value.selectedCollege;
this.stud.Department=form.value.Deparment;
this.saveStudentDetail(this.Student);

  }
  saveStudentDetail(stud1:Student)
  {
   console.log(this.stud);
   
    
  }
 
}
