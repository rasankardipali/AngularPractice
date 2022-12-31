import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
chechUserNamePassword(username:string,pwd: string){
   if( username=="admin" && pwd=="admin123"  )
   {
     localStorage.setItem('userNme',"admin");
     return true;
   }
   else{
    return false
   }
}

}
