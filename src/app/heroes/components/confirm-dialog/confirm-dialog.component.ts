import { Component, Inject } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
})
export class ConfirmDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Hero
  ) { }


  onConfirm(): void {
    this.dialogRef.close(true);
  }
  onNoClick(): void {
    this.dialogRef.close(false);
  }
}
