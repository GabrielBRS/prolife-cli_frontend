import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarCommercialModule } from '../../../components/commercial/navbar-commercial/navbar-commercial.module';
import { ProductPublicityModule } from '../../../components/commercial/product-publicity/product-publicity.module';
import { CommercialPageComponent } from './commercial-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CommercialPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NavbarCommercialModule,
    ProductPublicityModule,
  ],
  exports:[CommercialPageComponent],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA],
})
export class CommercialPageModule { }
