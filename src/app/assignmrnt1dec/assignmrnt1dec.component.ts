import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignmrnt1dec',
  templateUrl: './assignmrnt1dec.component.html',
  styleUrls: ['./assignmrnt1dec.component.css']
})
export class Assignmrnt1decComponent implements OnInit {
  log = [];
  showSecret=false
  constructor() { }

  ngOnInit() {
  }
  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1) ;
  }

}
