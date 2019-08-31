import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MatTableModule, MatButtonModule, MatDialogModule } from '@angular/material';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { DockerimagebrowserModule } from '../dockerimagebrowser/dockerimagebrowser.module';
import { DeleteConfirmationDialogComponent } from '../delete-confirmation-dialog/delete-confirmation-dialog.component';

@NgModule({
  declarations: [HomeComponent],
  entryComponents: [DeleteConfirmationDialogComponent],
  imports: [ CommonModule, SharedModule, HomeRoutingModule, DockerimagebrowserModule,
             MatTableModule, MatButtonModule, MatDialogModule]
})
export class HomeModule {}
