import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private _route:Router,private _authservice:AuthService) { }

  ngOnInit() {
  }

checkuser(username,pwd){

var output=this._authservice.chechUserNamePassword(username, pwd);

if(output==true)
{
  window.alert('Login Successfully');
}
else{
  window.alert('invalid user Name or password')
}


  // if(uname=='admin' && pwd=='admin'){
  //   this._route.navigate(['product/laptop']);
  // }
  // else{
  //   alert("invalid userName or Password")
  // }
}

}
