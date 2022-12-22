import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-copm4',
  templateUrl: './copm4.component.html',
  styleUrls: ['./copm4.component.css']
})
export class Copm4Component implements OnInit {
  username;
  constructor(private _utilityService:UtilityService) { 
    this._utilityService.username.subscribe(res =>{
      this.username=res;
    }) }

  ngOnInit() {
  }

  updateUserName(uname){
    console.log(uname.value);
    this._utilityService.username.next(uname.value);
    
  }

}
