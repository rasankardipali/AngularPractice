import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assign1dec',
  templateUrl: './assign1dec.component.html',
  styleUrls: ['./assign1dec.component.css']
})
export class Assign1decComponent implements OnInit {
  isDisplay=false;
  
  constructor() { }

  ngOnInit() {
  }
  array1:any=[];
count=0;
  toggleDisplay(value){
    this.isDisplay=!this.isDisplay;
  


this.array1.push(value);
this.count++
  }
  getColor(){
    if(this.count>5 ){
      return 'blue'
    }
    return 'pink'
  }

}
