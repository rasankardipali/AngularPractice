import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { DemoComponent } from './demo/demo.component';
import { demo1Component } from './demo1/demo1.component';
import { PracticeComponent } from './practice/practice.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Assign24Component } from './assign24/assign24.component';
import { DemodirectiveComponent } from './demodirective/demodirective.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { Assign25Component } from './assign25/assign25.component';
import { Assign25ngForComponent } from './assign25ng-for/assign25ng-for.component';
import { Assign25ngSwitchComponent } from './assign25ng-switch/assign25ng-switch.component';
import { AttriComponent } from './attri/attri.component';
import { CustdirDirective } from './custdir.directive';
import { PasswordvalDirective } from './passwordval.directive';
import { InputedirComponent } from './inputedir/inputedir.component';

import { HookPracticeComponent } from './hook-practice/hook-practice.component';
import { Assign1decComponent } from './assign1dec/assign1dec.component';
import { Assignmrnt1decComponent } from './assignmrnt1dec/assignmrnt1dec.component';
import { Assign2decComponent } from './assign2dec/assign2dec.component';
import { AddDeleteComponent } from './add-delete/add-delete.component';
import { HooksComponent } from './hooks/hooks.component';
import { SimpleformComponent } from './simpleform/simpleform.component';
import { Assign8DesComponent } from './assign8-des/assign8-des.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { Assign12DecComponent } from './assign12-dec/assign12-dec.component';
import { TdformComponent } from './tdform/tdform.component';
import { RaformComponent } from './raform/raform.component';
import { Servicecop1Component } from './servicecop1/servicecop1.component';
import { Servicecop2Component } from './servicecop2/servicecop2.component';
import { HttpClientModule} from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    DemoComponent,
    demo1Component,
    PracticeComponent,
    Assign24Component,
    DemodirectiveComponent,
    NgswitchComponent,
    Assign25Component,
    Assign25ngForComponent,
    Assign25ngSwitchComponent,
    AttriComponent,
    CustdirDirective,
    PasswordvalDirective,
    InputedirComponent,
    HooksComponent,
    HookPracticeComponent,
    Assign1decComponent,
    Assignmrnt1decComponent,
    Assign2decComponent,
    AddDeleteComponent,
    SimpleformComponent,
    Assign8DesComponent,
    ReactiveformComponent,
    Assign12DecComponent,
    TdformComponent,
    RaformComponent,
    Servicecop1Component,
    Servicecop2Component,
   



 
    
   


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
