import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordPageComponent } from './forgot-password-page.component';



@NgModule({
  declarations: [
    ForgotPasswordPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ForgotPasswordPageComponent],
})
export class ForgotPasswordPageModule { }
