import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectlistComponent } from './selectlist/selectlist.component';
import { SelectRoutingModule } from './select-routing.module';




@NgModule({
  declarations: [SelectlistComponent],
  imports: [
    CommonModule,
    SelectRoutingModule
  ]
})
export class SelectModule {
  constructor() {
    console.log(" in selected Module");

  }
}
