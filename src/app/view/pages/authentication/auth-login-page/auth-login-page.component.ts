import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthenticationServer } from 'src/app/engine/services/authentication/authentication-server.service';

@Component({
  selector: 'app-auth-login-page',
  templateUrl: './auth-login-page.component.html',
  styleUrls: ['./auth-login-page.component.scss'],
})

export class AuthLoginPageComponent implements OnInit {

  email:string = "";
  password:string = "";
  showForm:boolean = false;
  typeLogin:any;

  loginForm: FormGroup = this.fb.group({
    'email': ['', [Validators.required, Validators.email]],
    'password': ['', [Validators.required, Validators.minLength(6)]],
  })

  emptyEmail:boolean=false;
  emptyPassword:boolean=false;

  jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(private fb: FormBuilder,
    private authPatientService:AuthenticationServer, private router:Router
    ) { }

  ngOnInit():void {
    this.cleanToken()
  }

  logar(email:any, password:any){
    this.email = email;
    this.password = password;

    if(!this.email){
      this.emptyEmail=true;
    }

    if(!this.password){
      this.emptyPassword=true;
    }

    if(this.email && this.password){
      this.emptyEmail=false;
      this.emptyPassword=false;
    }
  }

  async onSubmit() {
    const crendentials = this.loginForm.value;

    this.authPatientService
      .login(crendentials)
      .subscribe(response => {
        const token:any = response.headers.get("authorization");
        const tokenString = JSON.stringify(token);
        const access_token:any = tokenString.slice(7);

        localStorage.setItem('access_token', access_token);
        this.router.navigateByUrl('/home');
      })
  }

  changeShowLogin(changeShowForm:boolean){
    this.showForm = changeShowForm;
  }

  cleanToken(){
    this.authPatientService.endSession();
  }
}



