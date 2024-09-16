import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commercial-page',
  templateUrl: './commercial-page.component.html',
  styleUrls: ['./commercial-page.component.scss']
})
export class CommercialPageComponent implements OnInit {

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
    window.alert("Destruir token e fazer o logout")
  }
}
