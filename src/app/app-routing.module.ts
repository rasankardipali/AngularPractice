import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { RegistrationComponent } from './registration/registration.component';
import { TdformComponent } from './tdform/tdform.component';


const routes: Routes = [ 
  {path:"",redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:"home",component:HomeComponent},
  { path:'aboutus', component: AboutusComponent } ,// localhost://4200/aboutus
{ path:'product', component: ProductComponent}, // localhost://4200/product
{ path:'contactus', component: ContactusComponent},
{path:'gallery', component:GalleryComponent},
{path:'tdform', component:TdformComponent},
{path:'feedback',component:FeedbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
