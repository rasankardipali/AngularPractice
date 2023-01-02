import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { FireBasePost } from '../models/fireBasePost';

import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
 myReactiveform:FormGroup;
 defoultvalue='Angular'
 defoultvalue1="Male"
 submitted=false;
notAllowedNames=['codemind','technology'];
 genders=[
  {id:"1",value:'Male'},
  {id:"2",value:'Female'}
]


myReactiveForm: FormGroup;
fireBasePost:FireBasePost
  constructor( private _fb:FormBuilder, private _firebase:FirebaseService) 
  {   this.createForm(); 
  }

  ngOnInit() {


   setTimeout(() => {
    this.myReactiveform.patchValue({
      'userDetails' : {
        'userName': 'Codemind1122',
        'email': 'test@gmail.com'
      }
    })
  }, 3500);

  }
  OnSubmit(){
  this.submitted=true;
    console.log(this.myReactiveform);
this.fireBasePost= new FireBasePost();
 this.fireBasePost. userName=this.myReactiveform['controls'].userDetail['controls']. userName.value;
 this.fireBasePost.email=this.myReactiveform['controls'].userDetail['controls'].email.value;
this.fireBasePost.Course=this.myReactiveform['controls'].Course.value;
this.fireBasePost.gender=this.myReactiveform['controls'].gender.value;
this.fireBasePost. skills=this.myReactiveform['controls']. skills.value;

this._firebase.createPostDataReactiveForm(this.fireBasePost).subscribe(res =>{
  console.log('post data from reactive form',this.fireBasePost );
  
})


    
  }



  OnAddSkills() {
    (<FormArray>this.myReactiveform.get('skills')).push(new FormControl(null, Validators.required));
   }

NaNames(controls:FormControl){
if(this.notAllowedNames.indexOf(controls.value ) !== -1){
  return{'notAllowedNames':true}
}
return null
}
NaEmails(control:FormControl): Promise<any> | Observable<any> {
  const myResponse = new Promise<any>((resolve, reject) => {
    setTimeout(() => {
      if(control.value === 'codemindtechnology@gmail.com'){
        resolve({'emailNotAllowed': true})
      } else {
        resolve(null)
      }
    }, 3000);
  })
  return myResponse;
}


createForm(){

//   this.myReactiveform = new FormGroup({
// 'userDetail':new FormGroup({'userName': new FormControl('',[ Validators.required,this.NaNames.bind(this)]),
// 'email':new FormControl('',[Validators.required,Validators.email,this.NaEmails])}),
//     'Course':new FormControl('Angular'),
//     'gender': new FormControl('Male'),
//     'skills': new FormArray([
//       new FormControl(null, Validators.required)
//      ])
//   })
 
// }










this.myReactiveform = this._fb.group({
  userDetail: this._fb.group({
    userName: ['', Validators.required],
    email: ['', Validators.required]
  }),
  Course: ['Angular'],
  gender: ['Male'],
  skills: this._fb.array([])
})


}
}