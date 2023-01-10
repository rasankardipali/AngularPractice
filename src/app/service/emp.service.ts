import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Emp } from '../models/emp';


@Injectable({
  providedIn: 'root'
})
export class EmpService {

  url='https://angular-crud-709e3-default-rtdb.firebaseio.com/'
  constructor( private _httpclient1:HttpClient) { }



 postEmpData(emp:Emp){
  return this._httpclient1.post(this.url+'employee.json',emp);
 }

 getpostedData(){
  return this._httpclient1.get(this.url+'employee.json')
 }


 deletePost(){
  return this._httpclient1.delete(this.url+'employee.json');
 }

//  deletePostById(id){
//   return this.httpClient.delete(`${devAPIUrl}posts/`+id);



deleteParticularR(emp:Emp){ 
   return this._httpclient1.delete(this.url+emp+'.json');
 }


 }


