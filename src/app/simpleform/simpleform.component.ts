import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { employee } from '../models/employee';
import { Employee } from '../models/Empoyee';

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrls: ['./simpleform.component.css']
})
export class SimpleformComponent implements OnInit {
  [x: string]: any;
  defoltValue: string="Angular";
  submitted: boolean = false;
  defoltgender:string="Female";
  // minDate:any="minDate";
  genders=[
    {id:"1",value:'Male'},
    {id:"1",value:'Female'}
  ]
employee =new Employee;
  constructor() { }

  ngOnInit() {
    // this.getDate();
  }
  OnSubmit(form:NgForm) {
    this.submitted=true;
    this.employee.course=form.value.course;
    this.employee.UserName=form.value.userdetail.username;
    this.employee.email=form.value.userdetail.email;
    this.employee.genders=form.value.gender;
    form.reset();
    form.controls['course'].setValue('Angular');
    form.controls['gender'].setValue('Male');
   this.savaEmployeeDetail(this.Employee)
      }
      savaEmployeeDetail(emp:employee){
console.log(this.employee);

      }
// getDate(){
// var date:any=new Date();
// var toDate:any=date.getDate();
// if(toDate < 10){
//   toDate='0'+toDate;
// }
// var month:any=date.getMonth()+1;
// if(month < 10){
//   month='0'+ month;
// }

// var year:any=date.getYear();
// this.minDate=year + "-" + month + "-" + toDate
// console.log(this.minDate);


// }



}
