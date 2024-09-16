import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServer } from 'src/app/engine/services/authentication/authentication-server.service';

@Component({
  selector: 'app-navbar-client',
  templateUrl: './navbar-client.component.html',
  styleUrls: ['./navbar-client.component.scss']
})
export class NavbarClientComponent implements OnInit {

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
