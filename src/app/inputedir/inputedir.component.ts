import { ArrayType } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Courses } from '../models/course';

@Component({
  selector: 'app-inputedir',
  templateUrl: './inputedir.component.html',
  styleUrls: ['./inputedir.component.css']
})
export class InputedirComponent implements OnInit {
  // tital:string=" employee dataS";

@Input() myinputMsg:string;



  constructor() { }

  ngOnInit() {
    console.log("Form parant componant",this.myinputMsg);
    
  }

}
