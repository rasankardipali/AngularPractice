import { Component, OnInit } from '@angular/core';
import { EmpDataService } from '../emp-data-service.service';


export class Movie{
  id:number;
  name:string;
  dept:string;
  desig:string;
  sal:number;

}


@Component({
  selector: 'app-employee1',
  templateUrl: './employee1.component.html',
  styleUrls: ['./employee1.component.css']
})

export class Employee1Component implements OnInit {


  //userName:any;
  arrayFaculty=[];
  arrayNew:Movie[]=[]
  


  constructor(private _empDataService:EmpDataService) { 
    // this._empDataService.userName.subscribe(res=>{
    //   // this.userName=res;
    //   this.userName.push(res);

      //console.log(res);
      
      //console.log(this.userName);
   // })
  }

  ngOnInit() {
    this._empDataService.employee.subscribe(res=>{
      console.log(res);
     
      this.arrayFaculty.push(res);


    });

  }
  //udateUserName(id, facultyName, departmentName, salary, designation){
  //   console.log(id.value, facultyName.value, departmentName.value, salary.value, designation.value);
    

  //   // this._empDataService.userName.next(id.value );
  //   // this._empDataService.userName.next(facultyName.value );
  //   // this._empDataService.userName.next(departmentName.value );
  //   // this._empDataService.userName.next(salary.value );
  //   // this._empDataService.userName.next(designation.value );
  //   var arrayNew=[id.value, facultyName.value, departmentName.value, salary.value, designation.value]

  //   this._empDataService.userName.next(arrayNew)
    

  // }

  onUpdate(eid,ename,ecmp,edept,erole){
    //next method is used to pass the value or data to observable
    // this._utilityService.userName.next(uname.value);
      let arrayNew:Movie={id:eid,name:ename,dept:ecmp,desig:edept,sal:erole}
      this._empDataService.employee.next(arrayNew);

    }


}
