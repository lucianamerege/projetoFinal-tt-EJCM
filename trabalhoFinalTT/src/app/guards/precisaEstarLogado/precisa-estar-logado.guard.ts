import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrecisaEstarLogadoGuard implements CanActivate {
  
  constructor(public router:Router){}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean{

    let data = localStorage.getItem('userToken');
    if( data )
      return true;
    else
      return this.router.navigate(['login']);
  }
}
