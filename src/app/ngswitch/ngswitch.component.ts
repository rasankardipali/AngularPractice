import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent implements OnInit {

  constructor() { }
  selectedProduct: string;
  ngOnInit() {
  }
  getProductValue(value) {
    console.log(value.target.value);
    this.selectedProduct = value.target.value;
  }

}
