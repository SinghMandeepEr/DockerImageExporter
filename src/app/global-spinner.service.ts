import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DeleteConfirmationDialogComponent } from './delete-confirmation-dialog/delete-confirmation-dialog.component';
import { GlobalSpinnerComponent } from './global-spinner/global-spinner.component';

@Injectable({
  providedIn: 'root'
})
export class GlobalSpinnerService {

  private dialog: MatDialogRef<GlobalSpinnerComponent>;
  private dialogSubscription;
  constructor(private dialogRef: MatDialog) { }
  showSpinnerDialog(data: string) {
  this.dialog = this.dialogRef.open(GlobalSpinnerComponent, {data: data});
  this.dialog.afterClosed().subscribe(() => { });
  }
  removeSpinnerDialog() {
    this.dialog.close();
  }
}
