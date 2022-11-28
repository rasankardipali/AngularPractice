import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  fistName:string='Dipali';
  lastName:string='Rasankar';
  name:string='codemind';
  serverId:number=56;
  allowNewServer:boolean=true;
  serverCreationStatus:string='server not created';


  constructor() { }
getServerStatus(){
 return this.allowNewServer=true;
  
}
onCreateServer(){
  return this.serverCreationStatus="server  created"

}

  ngOnInit() {
  }

}
