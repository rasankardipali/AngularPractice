import { Component } from '@angular/core';
import { Courses } from './models/course';
import { Product } from './models/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  // uname="i am angular devloper"
  public uid: number;
  appchildExist:boolean=true;
  data : string = 'red';
  name: string;
  price: number;
   product: Product =new Product();
  // Courses: any[]=[
  //   { srNo:1,courseName:"FullStack developer",developedBy:"Mithun Roi",developedYear:2005}];

    // foods: string[] = [];

    // getDataFromChild(value) {
    //   console.log(value);
    //   this.foods.push(value);
    // }
     table1 :any=[]
    addData(value){
      this.table1=value;
      console.log('in adddeta method',value);
      //  this.table1.push(value);
    }


    handleData(value) {
      this.data = value.target.value;
    }
    updateProduct() {
      this.product = new Product();
      this.product.name = this.name;
      this.product.price = this.price;
    }
    destroy(){
      this.appchildExist=false;
      
    }
  }