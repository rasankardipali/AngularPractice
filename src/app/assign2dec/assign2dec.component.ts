import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assign2dec',
  templateUrl: './assign2dec.component.html',
  styleUrls: ['./assign2dec.component.css']
})
export class Assign2decComponent implements OnInit {
  userName="Enter userName"
  
  constructor() { }

  ngOnInit() {
  }

  userlist=[];
  onClick(myuser){
    if(myuser.value.length > 0){
    this.userlist.push(myuser.value);
    myuser.value='';}
  }
    
  
    
  
  Ondelete(deleteme){
    this.userlist.splice(deleteme,1);
  }
}
