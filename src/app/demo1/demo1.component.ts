import { Component } from "@angular/core";


@Component({
 selector:'app-demo1',
 template:`<h3 class="c2">You are so successful </h3>`,
 styleUrls:[`./demo1.component.css`]
})
export  class demo1Component{


    name: string = 'Codemind';
    nyname:string="Dipali Rasankar";
    serverStatus:string="ofline";

}