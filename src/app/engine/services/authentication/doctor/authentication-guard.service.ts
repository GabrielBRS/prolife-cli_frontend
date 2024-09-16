import { Component, Injectable, Injector, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { User } from 'src/app/engine/models/user';
import { AuthenticationServer } from '../authentication-server.service';

@Injectable({
  providedIn: 'root',
})

export class AuthGuardDoctor implements CanActivate{

  userDoctor:User = new User();

  constructor(
    private router: Router,
    private authentication:AuthenticationServer,
    ) {
    }

    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): boolean {

        const authenticated = this.authentication.isAuthenticated();
        this.userDoctor = this.authentication.getUser();

      if(authenticated&&this.userDoctor.userType===2){
        return true;
      }else{
        this.router.navigateByUrl('/login');
        return false;
      }

    }
}
