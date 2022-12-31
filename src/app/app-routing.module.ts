import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AuthGuard } from './auth.guard';
import { ContactusComponent } from './contactus/contactus.component';
import { DemopostComponent } from './demopost/demopost.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Product } from './models/Product';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { ProductComponent } from './product/product.component';
import { TabletComponent } from './product/tablet/tablet.component';
import { TvComponent } from './product/tv/tv.component';
import { WashingMachinComponent } from './product/washing-machin/washing-machin.component';
import { RaformComponent } from './raform/raform.component';
import { RegistrationComponent } from './registration/registration.component';
import { TdformComponent } from './tdform/tdform.component';
import { UnsavedChangesGuard } from './unsaved-changes.guard';


const routes: Routes = [ 
  {path:"",redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:"home",component:HomeComponent},
  { path:'aboutus', component: AboutusComponent } ,// localhost://4200/aboutus

   {path:'post', canActivate:[AuthGuard],component:DemopostComponent},
   {path:'postdetails/:id',component:PostdetailsComponent},
{ path:'contactus', component: ContactusComponent},
{path:'gallery', component:GalleryComponent},
{path:'raform',   canDeactivate:[UnsavedChangesGuard],component:RaformComponent},
{path:'feedback',component:FeedbackComponent},
{path:'product',loadChildren:'./product/products.module#ProductsModule'},
{path:'orders',loadChildren:'./orders/orders.module#OrdersModule'},
 {path:'select',loadChildren:'./select/select.module#SelectModule'},

{path:"**",component:PagenotfoundComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes 	,{preloadingStrategy:PreloadAllModules} )],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(){
    console.log(" in app-routing module");
    
  }
}
