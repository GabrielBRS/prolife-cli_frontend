import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarCommercialComponent } from './navbar-commercial.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarCommercialComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[NavbarCommercialComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
})
export class NavbarCommercialModule { }
