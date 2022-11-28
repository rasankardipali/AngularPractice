import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assign25',
  templateUrl: './assign25.component.html',
  styleUrls: ['./assign25.component.css']
})
export class Assign25Component implements OnInit {
  checkbox=false;
  constructor() { }

  ngOnInit() {
  }
  Onclick(){
    return this.checkbox=true;
  }

}
