import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPublicityComponent } from './product-publicity.component';

@NgModule({
  declarations: [
    ProductPublicityComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports:[ProductPublicityComponent]
})
export class ProductPublicityModule { }
