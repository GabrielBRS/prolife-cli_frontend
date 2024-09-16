import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CredentialsClientComponent } from './credentials-client.component';



@NgModule({
  declarations: [
    CredentialsClientComponent
  ],
  imports: [
    CommonModule,

  ],
  exports:[CredentialsClientComponent],
})
export class CredentialsClientModule { }
