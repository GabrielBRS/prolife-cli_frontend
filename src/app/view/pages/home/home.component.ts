import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/engine/models/user';
import { AuthenticationServer } from 'src/app/engine/services/authentication/authentication-server.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userData:User = new User();

  constructor(private authService:AuthenticationServer, private route:Router) {

  }

  ngOnInit(): void {
    this.setUser();
    setTimeout(()=>{
      this.setRoute();
    },5000);
  }

  setUser(){
    this.userData = this.authService.getUser();
  }

  setRoute(){
    if(this.userData.userType===1){
      this.route.navigate(["/patient"]);
    }
    if(this.userData.userType===2){
      this.route.navigate(["/doctor"]);
    }
  }

}
