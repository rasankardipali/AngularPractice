import { Injectable } from '@angular/core';

import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpDataService {

// facultyData=new ParentArray;
  
userName= new Subject<object>();
employee= new Subject<object>();

  

  constructor() {
    // this.facultyData.id=101;
    // this.facultyData.facultyName="Dr.Anuradha Aldar";
    // this.facultyData.departmentName="Electronics";
    // this.facultyData.designation="Principle";
    // this.facultyData.salary=100000;
    
  }

  
}
