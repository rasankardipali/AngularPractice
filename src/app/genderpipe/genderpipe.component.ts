import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genderpipe',
  templateUrl: './genderpipe.component.html',
  styleUrls: ['./genderpipe.component.css']
})
export class GenderpipeComponent implements OnInit {
  employeeSearch=" ";
employee=[
  {id:1,
   name:'Madhuri',
   salary:58000,
   gender1:'Female'
  },
  {id:2,
    name:'Mahesh',
    salary:500000,
    gender1:'Male'
   },
   {id:3,
    name:'Kiran',
    salary:500000,
    gender1:'Male'
   },
   {id:4,
    name:'Pranjali',
    salary:70000,
    gender1:'Female'
   },
   {id:5,
    name:'Hemant',
    salary:50000,
    gender1:'Male'
  
   },
   {id:6,
    name:'Ramesh',
    salary:59000,
    gender1:'Male'

   },
   {id:7,
    name:'Shobha',
    salary:67000,
    gender1:'Female'
   }
     
]


  constructor() { }

  ngOnInit() {
  }

}
