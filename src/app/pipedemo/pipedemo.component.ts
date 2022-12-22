import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {

todayDate=new Date;
Myname:string ='Dipali';

price:number=400000;
price1:number=5675.865

obser;
obj={id:1,name:'raj'}
  constructor(private _utilityservice:UtilityService) { 
    this.obser=this._utilityservice.username;
  }

  ngOnInit() {
  }

}
