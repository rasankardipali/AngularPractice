import { Component, OnInit } from '@angular/core';
import { post } from '../models/post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-demopost',
  templateUrl: './demopost.component.html',
  styleUrls: ['./demopost.component.css']
})
export class DemopostComponent implements OnInit {

arrposts:post[]=[];


  constructor(private _postservice:PostService) { }

  ngOnInit() {
    this._postservice.getPosts().subscribe(res=>{
  
      this.arrposts=res;
      console.log('jsonplaceHolder' ,res);
    })
  }

}
