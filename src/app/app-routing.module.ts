import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { ProductComponent } from './product/product.component';
import { TabletComponent } from './product/tablet/tablet.component';
import { TvComponent } from './product/tv/tv.component';
import { WashingMachinComponent } from './product/washing-machin/washing-machin.component';
import { RegistrationComponent } from './registration/registration.component';
import { TdformComponent } from './tdform/tdform.component';


const routes: Routes = [ 
  {path:"",redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:"home",component:HomeComponent},
  { path:'aboutus', component: AboutusComponent } ,// localhost://4200/aboutus
{ path:'product',  component:ProductComponent, children:[//localhost:4200/ptroduct/tv,laptop,tab,washing_maching are child componant
{path:'laptop',component:LaptopComponent},
    {path:'tv',component:TvComponent},
    {path:'tablet',component:TabletComponent},
    {path:'washingMachin',component:WashingMachinComponent},
   ]}, // localhost://4200/product
{ path:'contactus', component: ContactusComponent},
{path:'gallery', component:GalleryComponent},
{path:'tdform', component:TdformComponent},
{path:'feedback',component:FeedbackComponent},
{path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
