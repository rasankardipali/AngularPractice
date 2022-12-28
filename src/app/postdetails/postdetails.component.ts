import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css']
})
export class PostdetailsComponent implements OnInit {

  constructor(private _postservice:PostService,private route:ActivatedRoute) { }

  arrPost:any[]=[];
  ngOnInit() {
    let id=this.route.snapshot.params['id'];
    this._postservice.getPostById(id).subscribe(res=>{
      //console.log('get post by id',res);
      this.arrPost.push(res);
      console.log('array',this.arrPost);
      
    })
  }
  displayStyle = "none";
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

}
