import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hook-practice',
  templateUrl: './hook-practice.component.html',
  styleUrls: ['./hook-practice.component.css']
})
export class HookPracticeComponent implements OnInit,OnChanges {
@Input() arrayval:any;

  constructor() { 
    console.log(" Hook componant constructor is colled");
  }
  ngOnChanges(changes: SimpleChanges): void {
   console.log(" Hook componant ngOnChange is colled");
   for (const propname in changes) {
    const prop = changes[propname];

    const {previousValue, currentValue, firstChange} = prop;

    console.log(`Prop name ${propname}`);
    console.log(`Prev  value ${previousValue}`);
    console.log(`Current value ${currentValue}`);
    console.log(`First change ${firstChange}`);
    console.log("---------------")

  }
   
  }

  ngOnInit() {
  }

}
