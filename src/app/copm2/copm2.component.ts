import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-copm2',
  templateUrl: './copm2.component.html',
  styleUrls: ['./copm2.component.css']
})
export class Copm2Component implements OnInit {
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
   
    let employee=[{id:2,
      name:'Hemant',
      gender:'Male'}] 
//next method is used to send massage to an observable i.e username
      this._utilityService.username.next(JSON.stringify(employee));
  }


}
