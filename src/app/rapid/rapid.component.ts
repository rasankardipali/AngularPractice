import { Component, OnInit } from '@angular/core';
import { rapid } from '../models/rapid';
import { FirebaseService } from '../service/firebase.service';

import { RapidApiService } from '../service/rapid-api.service';

@Component({
  selector: 'app-rapid',
  templateUrl: './rapid.component.html',
  styleUrls: ['./rapid.component.css']
})
export class RapidComponent implements OnInit {
  arrposts:any[]=[];
  constructor(private _rapidservice:RapidApiService,  private _fireBase:FirebaseService) { }

  ngOnInit() {
    this._rapidservice.getData().subscribe(res=>{
      
      console.log("Api data ",res);
      this.arrposts.push(res);
        console.log("Api data ",this. arrposts);
    })

    this._fireBase.createPost().subscribe(res =>{
      console.log('firebase post',res);})
  }



  createPost(){

  
  }
//  showData(){
// this._rapidservice.getData().subscribe(res=>{
//    console.log("Api data ",res);
//         })
// }
}
