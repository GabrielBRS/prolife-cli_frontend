import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptorPatient } from './engine/services/authentication/auth.interceptor';
import { AuthenticationServer } from './engine/services/authentication/authentication-server.service';
import { AuthLoginPageModule } from './view/pages/authentication/auth-login-page/auth-login-page.module';
import { ClientHomePageModule } from './view/pages/client/primary/client-home-page/client-home-page.module';
import { CommercialPageModule } from './view/pages/commercial/commercial-page/commercial-page.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [

    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    // Application
    CommercialPageModule,
    ClientHomePageModule,
    AuthLoginPageModule,

  ],
  providers: [
    AuthenticationServer,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorPatient,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
