import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogOverviewExampleDialog } from './dialog-overview-example-dialog';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

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
    constructor(public dialog: MatDialog, private http: Http) {

    }


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
    holidayList: Array<any> = [];

    items: any;

    getHolidaydata(from, to): Promise<any> {
        console.log(from.value, " from to ", to.value);
        let url = "https://local-scheduling-ge.run.aws-usw02-pr.ice.predix.io/api/1/holidays/range/" + from.value + "/" + to.value;
        return this.http.get(url)
            .toPromise()
            .then(res => {
                this.holidayList = res.json();
                console.log(this.holidayList);
                return res;
            });
    }

}

