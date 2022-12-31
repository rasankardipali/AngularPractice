import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { RaformComponent } from './raform/raform.component';


@Injectable({
  providedIn: 'root'
})
export class UnsavedChangesGuard implements CanDeactivate<RaformComponent> {

  canDeactivate(component: RaformComponent): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      if(component.name.dirty){
        
        return window.confirm('You have Unsaved changes.Are you want to navigate?');

      }
      else
      {
        return true;
      }
  }


  
  
}
