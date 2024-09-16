import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphicsClientComponent } from './graphics-client.component';



@NgModule({
  declarations: [
    GraphicsClientComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[GraphicsClientComponent]
})
export class GraphicsClientModule { }
