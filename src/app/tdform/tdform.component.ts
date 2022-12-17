import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.css']
})
export class TdformComponent implements OnInit {


  defaultVal="Mumbai";
  defoltgender="Male"
  genders=[
    {id:"1",value:"Male"  },
    { id:"2",value:"Female"  }
  ]
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
    console.log(form);
    

  }

}
