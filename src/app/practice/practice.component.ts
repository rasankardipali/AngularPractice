import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  fistName:string='Dipali';
  lastName:string='Rasankar';


  constructor() { }

  ngOnInit() {
  }

}
