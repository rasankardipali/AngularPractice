import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assign24',
  templateUrl: './assign24.component.html',
  styleUrls: ['./assign24.component.css']
})
export class Assign24Component implements OnInit {
userName="";
  constructor() { }
  Onempty(){
return this.userName="";
  }
  ngOnInit() {
  }

}
