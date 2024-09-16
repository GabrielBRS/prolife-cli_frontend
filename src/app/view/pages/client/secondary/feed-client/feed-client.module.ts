import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedClientComponent } from './feed-client.component';



@NgModule({
  declarations: [
    FeedClientComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[FeedClientComponent]
})
export class FeedClientModule { }
