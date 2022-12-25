import { Component, OnInit } from '@angular/core';
import { DemeserviceService } from '../demeservice.service';

@Component({
  selector: 'app-servicecop2',
  templateUrl: './servicecop2.component.html',
  styleUrls: ['./servicecop2.component.css']
})
export class Servicecop2Component implements OnInit {

  products={};


  constructor(private _demeserviceService:DemeserviceService) { }

  ngOnInit() {
this. products=this._demeserviceService.products;
  }
  OnSubscribe(){
    this._demeserviceService.display();
   }

}
