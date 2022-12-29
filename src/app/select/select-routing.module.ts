import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectlistComponent } from './selectlist/selectlist.component';



const routes: Routes = [
  {path:'',component:SelectlistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectRoutingModule { }
