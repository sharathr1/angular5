import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogOverviewExampleDialog } from './dialog-overview-example-dialog';

/**
 * @title Dialog Overview
 */
@Component({
    selector: 'popup',
    templateUrl: './dialog-overview-example.html',
    styleUrls: ['./dialog-overview-example.css']

})
export class DialogOverviewExample {

    animal: string;
    name: string;

    constructor(public dialog: MatDialog) { }

    openDialog(): void {
        let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '280px',
            height: '200px',

            data: { name: this.name, animal: this.animal }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.animal = result;
        });
    }

}

