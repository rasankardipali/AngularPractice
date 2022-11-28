import { Component, OnInit } from '@angular/core';
import { Courses } from '../models/course';

@Component({
  selector: 'app-assign25ng-for',
  templateUrl: './assign25ng-for.component.html',
  styleUrls: ['./assign25ng-for.component.css']
})
export class Assign25ngForComponent implements OnInit {
tital:string="Top 3 course";
course:Courses[]=[
  { srNo:1,courseName:"FullStack developer",developedBy:"Mithun Roi",developedYear:2005},
  { srNo:2,courseName:"Backend developer",developedBy:"Rajesh Ambani",developedYear:1999},
  { srNo:3,courseName:"Frontend developer",developedBy:"Sumidha Roi",developedYear:2020}
]
  constructor() { }

  ngOnInit() {
  }

}
