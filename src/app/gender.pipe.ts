import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value:any,gender1:string) {
  if(gender1=='Male'){
    return 'Mr.'+ value;
  }else if(gender1=='Female'){
    return 'Ms.'+ value;
  }else{
return value
  }
 
  }
  
}
