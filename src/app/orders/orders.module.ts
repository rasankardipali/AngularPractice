import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { RoutersRoutingModule } from './routers-routing.module';




@NgModule({
  declarations: [ OrderlistComponent],
  imports: [
    CommonModule,
    RoutersRoutingModule
    
  ]
})
export class OrdersModule { 
  constructor(){
    console.log(" In OrderModule");
    
  }
}
