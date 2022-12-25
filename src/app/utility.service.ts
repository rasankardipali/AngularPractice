import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

// username=new Subject<any>();
username=new BehaviorSubject('Angular project');
employee= new Subject<object>();

  constructor() { }
}
