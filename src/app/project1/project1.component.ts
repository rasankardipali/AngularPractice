import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup,  Validators } from '@angular/forms';
import { pipe } from 'rxjs';
// import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { Emp } from '../models/emp';
import { EmpService } from '../service/emp.service';
import { filter, map, take, takeLast, toArray,} from 'rxjs/operators';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-project1',
  templateUrl: './project1.component.html',
  styleUrls: ['./project1.component.css']
})
export class Project1Component implements OnInit {


  employee: any[]=[];
  myReactiveform: FormGroup;
  emp:Emp;
    FormControl=new FormControl();
  constructor(private _fb:FormBuilder, private _httpclient1:EmpService) { 
    this.createForm();
  }

  ngOnInit() {

// this._firebase.getPostDataFirebase().pipe( map( responseData =>{ 
//   const postArray =[];
//   for(const key in responseData){
//     if(responseData.hasOwnProperty(key)){
//       postArray.push({...responseData[key], id:key})
//     }
//   }
// return postArray;
// })).subscribe(res=>{
//      console.log('get data from firebase API',res);
  
// })


  }

  










  
    




  OnSubmit(){
    console.log(this. myReactiveform);
    this.emp=new Emp;
    this.emp.name=this.myReactiveform['controls'].name.value;
    this.emp.lname=this.myReactiveform['controls'].lname.value;
    this.emp.email=this.myReactiveform['controls'].email.value;
    this.emp.age=this.myReactiveform['controls'].age.value;
    this.emp.phone=this.myReactiveform['controls'].phone.value;
    this.emp.city=this.myReactiveform['controls'].city.value;
   this.emp.gender=this.myReactiveform['controls'].gender.value;

this._httpclient1.postEmpData(this.emp).subscribe(res =>{
  console.log(" emplopyee data posted to firebase server",this.emp);
  
 })
 }

  saveData(){

    this._httpclient1.getpostedData().pipe( map(responceData =>{
      const postArray=[];
      for(const key in responceData){
        if(responceData.hasOwnProperty(key)){
          postArray.push({...responceData[key],id:key})
        
      }
    }
    return postArray
    }) ).subscribe(res =>{
      console.log('employee data get from fireBase server',res );
      // this.employee.push(res);
      // console.log("table data",this.employee);
      console.log(" formated data" ,res);
       this.employee=res
      
    })
    
 }

 delete( id){ 

  return this._httpclient1.deleteParticularR(id).subscribe();
  window.alert(" Recode is deleted");
  this.saveData();
 }

 
  
 














createForm(){

    this.myReactiveform = new FormGroup({ 

      'name': new FormControl('',[Validators.required,Validators.maxLength(5),Validators.minLength(5) ]),
      'lname':new FormControl('',[Validators.required, Validators.maxLength(10)]),
      'email':new FormControl('',[Validators.required,Validators.email]),
      'age':new FormControl('',[Validators.required,Validators.minLength(17),Validators.maxLength(20)]),  
      
      'phone':new FormControl('+91',[ Validators.required, Validators.minLength(10),Validators.maxLength(10)]),
      'city':new FormControl('Mumbai',Validators.required),
      'gender':new FormControl('Male',Validators.required),
      'password':new FormControl('',[Validators.required,Validators.minLength(8)]),
      'cPassword':new FormControl('',[Validators.required,Validators.minLength(8)])
     })
  }


  deletePost(){
    window.alert(" Are u sure to delete ");
    this._httpclient1.deletePost().subscribe();
   this.saveData();
      
     
    
  }


 

}