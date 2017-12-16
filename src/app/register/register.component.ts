import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { Http } from '@angular/http';
declare var jquery: any;
declare var $: any;
//"jquery": "^3.2.1", 

@Component({
    selector: 'register-data',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterCompoment {

    itStatus: boolean = false;

    itList: any[] = [{
        "ID": "1",
        "Name": "TCS"
    },
    {
        "ID": "2",
        "Name": "INFY"
    }];

    powers = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];
    model = new User();
    // submitted = true;
    // onSubmit() {
    //     console.log("test");
    //     this.submitted = true;
    // }
    respstr: any;
    get diagnostic() {
        this.respstr = JSON.stringify(this.model);
        console.log("test");
        console.log();
        return this.respstr;
    }

    get: any;
    errorMsg: any;
    errorCheck: boolean = false;
    succesCheck: boolean = false;
    dofade: boolean = false;

    constructor(private _https: Http) {

    }

    getProfile(url) {
        console.log("check profile ", url);
        /*   this.get =http://myjson.com/v6kmr 
        https://api.myjson.com/bins/n32sz
        https://local-scheduling-ge.run.aws-usw02-pr.ice.predix.io/api/1/holidays?year=2017&month=9*/

        this._https.get(url).map((res) => res)
            .subscribe(
            (data) => {
                console.log(this.get = data.json());
                this.succesCheck = true;
                this.dofade = true;
                setTimeout(() => {
                    this.dofade = false;
                }, 3000);
            },
            (error) => { this.errorhandler(error); }
            );
    }
    errorhandler(error) {

        console.log("error", error);
        this.errorMsg = error.json();
        this.errorCheck = true;

    }
}