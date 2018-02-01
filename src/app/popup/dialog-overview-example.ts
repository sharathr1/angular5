import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogOverviewExampleDialog } from './dialog-overview-example-dialog';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClient } from "@angular/common/http";
import { ServiceCompoment } from '../service/service-http.component';

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
    public chosenMod: object;
    constructor(private service: ServiceCompoment, public dialog: MatDialog, private http: Http, private httpClient: HttpClient) {

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
    /*    holidayList: Array<any> = [];
    */
    holidayList: any;

    items: any;

    getHolidaydata(from, to): Promise<any> {
        console.log(from.value, " from to ", to.value);
        let url = "https://local-scheduling-ge.run.aws-usw02-pr.ice.predix.io/api/1/holidays/range/" + from.value + "/" + to.value;
        return this.httpClient.get(url)
            .toPromise()
            .then(res => {
                console.log(res);
                //  this.holidayList = res.json() for http ;
                this.holidayList = res; // res for httpclient
                // console.log(this.holidayList);
                return res;
            });
    }
    getHolidaydata2(from, to): void {
        console.log(from.value, " from-2- to ", to.value);
        let url = "https://local-scheduling-ge.run.aws-usw02-pr.ice.predix.io/api/1/holidays/range/" + from.value + "/" + to.value;
        this.httpClient.get(url)
            .subscribe(
            success => {
                console.log("Successfully Completed");
                console.log(success);
            }
            );
    }
    getHoliday(csd) {
        console.log(" drop down value :", csd);
    }
    selectedOption = null;
    modo(holiday: any) {
        this.selectedOption = holiday;
        console.log(holiday, " drop down value :", this.selectedOption);

        debugger;

    }
}

