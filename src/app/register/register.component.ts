import { Component, OnInit } from '@angular/core';
import { User } from './user';

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

}