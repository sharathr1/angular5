import { Component, Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
declare var jquery: any;
declare var $: any;
//"jquery": "^3.2.1", 
@Injectable()
@Component({
    selector: 'service-http-data',
    templateUrl: './service-http.component.html',
    styleUrls: ['./service-http.component.css']
})
export class ServiceCompoment {
    errorMsg: any;
    output: any;

    constructor(private _https: Http) {

    }

    getService(url): Observable<any> {
        return this._https.get(url).map((res) => res)
            .map(
            (data) => {
                console.log("this.output =", data.json());
                return data.json();
            },
            (error) => {
                console.log("Error ", error);
                return this.handleError(error);
            }
            );
    }
    private handleError(error: any) {
        let msg = 'Oops... Something went wrong!!!';
        switch (error.status) {
            case 400:
                msg = 'Not Found';
                break;
            case 404:
                msg = 'Bad Request...';
                break;
            case 403:
            case 401:
                msg = 'Oops... Something might have broken!!! Try to refresh your browser.';
                break;
            case 500:
                msg = 'Server Error!!!';
            default:
                msg = 'Error ' + (error.status ? error.status : '') + '!!!';
        }
    }
}