import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
// @Input() myinputMsg:string;
@Input() myinputMsg1:object;

// @Output() foodevent: EventEmitter<string> = new EventEmitter<string>();
@Output() arrayval: EventEmitter<object> = new EventEmitter<object>();


courses: any[] = [
  { srNo: 1, courseName: "FullStack developer", developedBy: "Mithun Roi", developedYear: 2005 },
  { srNo: 2, courseName: "Backend developer", developedBy: "Rajesh Ambani", developedYear: 1999 },
  { srNo: 3, courseName: "Frontend developer", developedBy: "Sumidha Roi", developedYear: 2020 }
];
  
  constructor() { }

  ngOnInit() {
    // console.log("Form parant componant",this.myinputMsg);
    // console.log("Array element",this.myinputMsg1);

  }
 
  // addtofood(value) {
  //   // foodevent is nothing but your custom event (foodevent)
  //       this.foodevent.emit(value);
  //     }

  getData(courses){
    console.log(" get data in getdata method",courses);
    
    this.arrayval.emit(courses);
  }

    }
