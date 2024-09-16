import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationClientComponent } from './configuration-client.component';



@NgModule({
  declarations: [
    ConfigurationClientComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ConfigurationClientComponent]
})
export class ConfigurationClientModule { }
