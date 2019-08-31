import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DockerimageComponent } from '../dockerimage/dockerimage.component';



@NgModule({
  declarations: [DockerimageComponent],
  imports: [
    CommonModule
  ],
  exports: [ DockerimageComponent]
})
export class DockerimagebrowserModule { }
