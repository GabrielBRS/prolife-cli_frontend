import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { User } from 'src/app/engine/models/user';
import { AuthenticationServer } from '../authentication-server.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardPatient implements CanActivate {

  userPatient:User = new User();

  constructor(
    private router: Router,
    private authentication: AuthenticationServer) { }

    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): boolean {

      const authenticated = this.authentication.isAuthenticated();
      this.userPatient = this.authentication.getUser();

      if(authenticated&&this.userPatient.userType===1){
        return true;
      }else{
        this.router.navigateByUrl('/login');
        return false;
      }

    }
}
