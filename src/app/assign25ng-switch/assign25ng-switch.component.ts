import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assign25ng-switch',
  templateUrl: './assign25ng-switch.component.html',
  styleUrls: ['./assign25ng-switch.component.css']
})
export class Assign25ngSwitchComponent implements OnInit {
  selectedProduct:string;
  constructor() { }
  getProductValue(value) {
    console.log(value.target.value);
    this.selectedProduct = value.target.value;
  }
  ngOnInit() {
  }

}
