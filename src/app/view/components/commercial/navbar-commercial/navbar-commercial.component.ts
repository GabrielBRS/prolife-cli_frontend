import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-commercial',
  templateUrl: './navbar-commercial.component.html',
  styleUrls: ['./navbar-commercial.component.scss']
})
export class NavbarCommercialComponent implements OnInit {

  @Input() navbarInterface:any;
  @Input() authentication:boolean=false;
  @Input() tokenResponse:any;

  // @Output() newStatusCommercial = new EventEmitter<string>();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // changeStatusClient(){
  //   let value:any= [this.navbarInterface="client", this.authentication=true,this.tokenResponse="client"];
  //   this.newStatusCommercial.emit(value);

  // }

  logout(){
    // localStorage.getItem('access_token');
    console.table(localStorage.getItem('access_token'));
    window.alert("Destruir token e fazer o logout")
  }
}
