import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsClientComponent } from './results-client.component';



@NgModule({
  declarations: [
    ResultsClientComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ResultsClientComponent]
})
export class ResultsClientModule { }
