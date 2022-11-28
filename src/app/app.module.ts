import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { DemoComponent } from './demo/demo.component';
import { demo1Component } from './demo1/demo1.component';
import { PracticeComponent } from './practice/practice.component';
import { FormsModule } from '@angular/forms';
import { Assign24Component } from './assign24/assign24.component';
import { DemodirectiveComponent } from './demodirective/demodirective.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { Assign25Component } from './assign25/assign25.component';
import { Assign25ngForComponent } from './assign25ng-for/assign25ng-for.component';
import { Assign25ngSwitchComponent } from './assign25ng-switch/assign25ng-switch.component';
import { AttriComponent } from './attri/attri.component';
import { CustdirDirective } from './custdir.directive';
import { PasswordvalDirective } from './passwordval.directive';




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
    PasswordvalDirective
    
   


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
