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
    createAuthorizationHeader(headers: Headers) {
        /* headers.append('Authorization', 'Basic ' +
             btoa('username:password'));*/
        headers.append('Authorization', 'bearer  X7lc1mjRZk0QJILKPQfutR0gO2H1');
        // headers.append('Access-Control-Allow-Origin', 'Origin, Content-Type, X-Auth-Token');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'GET');

    }
    getService(url): Observable<any> {
        let headers = new Headers();
        this.createAuthorizationHeader(headers)
        debugger;
        return this._https.get(url, {
            headers: headers
        }).map((res) => res)
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