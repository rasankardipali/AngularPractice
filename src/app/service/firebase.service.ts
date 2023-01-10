import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { FireBasePost } from '../models/fireBasePost';
import { post } from '../models/post';
import { PostService } from '../post.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
url='https://angular-crud-709e3-default-rtdb.firebaseio.com/'
  constructor( private _firebase:HttpClient) { }
  users:any []=[
    {id:1,name:'raje',gender:'malle'},
    {id:2,name:'rajeshree',gender:'female'} , 
    {id:3,name:'pramodini',gender:'female'  } , 
  ]



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
getPostDataFirebase(){
  return this._firebase.get(this.url+'posts.json')
}


}
