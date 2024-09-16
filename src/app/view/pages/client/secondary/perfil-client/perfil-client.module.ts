import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilClientComponent } from './perfil-client.component';



@NgModule({
  declarations: [
    PerfilClientComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[PerfilClientComponent]
})
export class PerfilClientModule { }
