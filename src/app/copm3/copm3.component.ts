import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-copm3',
  templateUrl: './copm3.component.html',
  styleUrls: ['./copm3.component.css']
})
export class Copm3Component implements OnInit {
  username;
  constructor(private _uilityService:UtilityService) {  
    this._uilityService.username.subscribe(res =>{
    this.username=res;
  })}

  ngOnInit() {
  }
  updateUserName(uname){
    console.log(uname.value);
    this._uilityService.username.next(uname.value);
    
  }

}
