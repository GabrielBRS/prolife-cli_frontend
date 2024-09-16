import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthLoginPageComponent } from './auth-login-page.component';
import { AuthInterceptorPatient } from 'src/app/engine/services/authentication/auth.interceptor';



@NgModule({
  declarations: [
    AuthLoginPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports:[AuthLoginPageComponent],
})
export class AuthLoginPageModule {
  static forRoot(): ModuleWithProviders<AuthLoginPageModule> {
    return {
      ngModule: AuthLoginPageModule,
      providers: [
       AuthInterceptorPatient
      ]
    }
  }
}
