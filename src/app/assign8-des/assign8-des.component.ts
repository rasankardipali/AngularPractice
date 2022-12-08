import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-assign8-des',
  templateUrl: './assign8-des.component.html',
  styleUrls: ['./assign8-des.component.css']
})
export class Assign8DesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
console.log(form);

  }
}
