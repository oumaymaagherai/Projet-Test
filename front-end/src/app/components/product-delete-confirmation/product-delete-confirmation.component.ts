import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-product-delete-confirmation',
  templateUrl: './product-delete-confirmation.component.html',
  styleUrls: ['./product-delete-confirmation.component.css']
})
export class ProductDeleteConfirmationComponent  {
  constructor(public dialogRef: MatDialogRef<ProductDeleteConfirmationComponent>
   ){

  }
  @Output() confirmed: EventEmitter<boolean> = new EventEmitter<boolean>();


  onConfirm() {
    this.dialogRef.close(true);
  }

  onCancel() {
    this.dialogRef.close(false);

  }
}
