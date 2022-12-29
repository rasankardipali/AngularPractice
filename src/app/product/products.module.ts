import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopComponent } from './laptop/laptop.component';
import { TvComponent } from './tv/tv.component';
import { TabletComponent } from './tablet/tablet.component';
import { WashingMachinComponent } from './washing-machin/washing-machin.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { CustdirDirective } from '../custdir.directive';
import { UtilityModule } from '../models/utility.module';

const prodRoutes:Routes=[
  { path:'',  component:ProductComponent, children:[//localhost:4200/ptroduct/tv,laptop,tab,washing_maching are child componant
{path:'laptop',component:LaptopComponent},
    {path:'tv',component:TvComponent},
    {path:'tablet',component:TabletComponent},
    {path:'washingMachin',component:WashingMachinComponent},
   ]}, // localhost://4200/product
];

@NgModule({
  declarations: [
    
    LaptopComponent,
    TvComponent,
    TabletComponent,
    WashingMachinComponent,
    ProductComponent,
   
  

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(prodRoutes),
    UtilityModule,
  ],
  exports:[
    RouterModule
  ]

})
export class ProductsModule { 
  constructor(){
  console.log("In   ProductsModule");
  }

}
