import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarClientComponent } from './navbar-client.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavbarClientComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[NavbarClientComponent],
})
export class NavbarClientModule { }
