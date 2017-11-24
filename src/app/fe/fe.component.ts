import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
@Component({
    selector: 'fe-data',
    templateUrl: './fe.component.html',
    styleUrls: ['./fe.component.css']
})
export class FECompoment {

    name: String = 'Sharath';
    lastName: String = 'R';
    cell: Number = 88892772944;
    imagepath: String = "https://blobstore-ls-ge.run.aws-usw02-pr.ice.predix.io/v1/blob/images.jpg";
    people: any;
    status: any;
    constructor(private http: Http) {
    }

    getFullName(): string {
        return this.name + ' ' + this.lastName;
    }

    fetchdata() {
        console.log("Fetch Data")
        return this.http.get(`http://localhost:8084/fieldEngineerProfile/ping`)
            .map((res: Response) => res.json())
            .subscribe(res => this.people = res);
    }

}