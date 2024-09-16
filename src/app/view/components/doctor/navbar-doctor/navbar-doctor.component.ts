import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServer } from 'src/app/engine/services/authentication/authentication-server.service';

@Component({
  selector: 'app-navbar-doctor',
  templateUrl: './navbar-doctor.component.html',
  styleUrls: ['./navbar-doctor.component.scss']
})
export class NavbarDoctorComponent implements OnInit {

  testTokenId:any;

  constructor(private route:Router, private testToken: AuthenticationServer) { }

  ngOnInit(): void {
    this.testTokenId = this.testToken.getToken();
  }

  logout(){
    this.testToken.endSession();
    // this.testToken.deleteUser();
    this.route.navigate(["/"])
  }

}
