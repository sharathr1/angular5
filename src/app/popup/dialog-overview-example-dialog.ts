import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogOverviewExample } from './dialog-overview-example';

@Component({
    selector: 'dialog-overview-example-dialog',
    templateUrl: './dialog-overview-example-dialog.html',
    styleUrls: ['./dialog-overview-example-dialog.css']

})
export class DialogOverviewExampleDialog {

    constructor(
        public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
