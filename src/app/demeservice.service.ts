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

  apiURL = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http:HttpClient) { }

display(){
  alert('Susbsrcibed successfully');
}

getUserData(){
  return this.http.get(this.apiURL);
}



}
