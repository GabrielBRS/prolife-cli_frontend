import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/engine/models/user';
import { AuthenticationServer } from 'src/app/engine/services/authentication/authentication-server.service';

@Component({
  selector: 'app-collaborator-home-page',
  templateUrl: './collaborator-home-page.component.html',
  styleUrls: ['./collaborator-home-page.component.scss']
})
export class CollaboratorHomePageComponent implements OnInit {

  userData:User = new User();

  constructor(private authService:AuthenticationServer) {

  }

  ngOnInit(): void {
    this.userData = this.setUser();
    // window.alert(JSON.stringify(this.pacienteAuthService.getUserAuthenticated()))
    // this.userData.tokenExpired = this.pacienteAuthService.isAuthenticated();
    // window.alert(JSON.stringify(this.userData.tokenExpired))
  }

  setUser(){
    return this.authService.getUser();
  }

}
