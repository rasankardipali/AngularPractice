import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FireBasePost } from '../models/fireBasePost';
import { post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
url='https://angular-crud-709e3-default-rtdb.firebaseio.com/'
  constructor( private _firebase:HttpClient) { }

createPost(){
let postData={
  tital:'this is angular 8 crud ',
  content:'thise is a firebase crud opration with post'

}
return  this._firebase.post(this.url+'posts.json',postData);

}

createPostDataReactiveForm(fireBasePost:FireBasePost){
  return this._firebase.post(this.url+'post.json',fireBasePost);
  
    
 

}



}
