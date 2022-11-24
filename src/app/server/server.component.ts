import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    template: `<h1> This is my server component</h1>
    <h1 class="test1" id="test1">This is h2</h1>
    {{name}}`,
    styleUrls: ['./server.component.css']
})
export class ServerComponent{

    name: string = 'Codemind';
    nyname:string="Dipali Rasankar";
    serverStatus:string="ofline";
    allowNewServer:boolean= true;
    serverCreationStatus:string="Server not Created"
    constructor(){
        setTimeout(()=> {
            this.allowNewServer = true
          }, 5000);
    }

    

    getServerStatus() {
        return this.serverStatus;
      }
    onCreateStatus(){
        this.serverCreationStatus='Server Created'
    }

}