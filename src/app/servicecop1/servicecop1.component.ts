import { Component, OnInit } from '@angular/core';
import { DemeserviceService } from '../demeservice.service';

@Component({
  selector: 'app-servicecop1',
  templateUrl: './servicecop1.component.html',
  styleUrls: ['./servicecop1.component.css']
})
export class Servicecop1Component implements OnInit {

  constructor(private _demeserviceService:DemeserviceService) { }

  ngOnInit() {
  }
 OnSubscribe(){
  this._demeserviceService.display();
 }
}
