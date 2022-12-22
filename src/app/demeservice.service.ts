import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DemeserviceService {


  products=[
    {name:'laptop',id:101},
    {name:'Modile',id:102},
    {name:'TV',id:103},
  ];

  apiURL = 'https://jsonplaceholder.typicode.com/';
  constructor(private http:HttpClient) { }

display(){
  alert('Susbsrcibed successfully');
}

getUserData(){
  let users='users'
  return this.http.get(this.apiURL+users);
}
getDataposts(){
  let posts='posts'
  return this.http.get(this.apiURL+posts);
}



}
