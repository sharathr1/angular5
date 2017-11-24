import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'userregister-form',
    templateUrl: './userregister-form.component.html',
    styleUrls: ['./userregister-form.component.css']

})

export class RegisterdataFormComponent {
    model = new User();
    // model = new User(1, 'Sharath', 'Java', '5', 'true');
    techList: string[] = ["Java", "Py", "R", "Angular2", "VBS"];
    submitted = false;
    formdata: any;
    errorMsg: String;
    objList: User[] = [];
    a: any;
    test: Number;
    errorStatus: boolean = false;
    onSubmit(model) {
        console.log("ID " + this.model.user_id);
        //        debugger;
        if (!isNaN(Number(this.model.user_id)) && this.trimStr(this.model.user_id.toString()).length > 0) {
            this.formdata = JSON.stringify(this.model);
            console.log("submit " + this.formdata);
            this.objList.push(this.model);
            this.objList.sort((a, b) => {
                if (Number(a.user_id) < Number(b.user_id)) return -1;
                else if (Number(a.user_id) > Number(b.user_id)) return 1;
                else return 0;
            });
            this.model = new User();
            this.submitted = true;
            this.errorStatus = false;
        } else {
            this.errorStatus = true;
            this.errorMsg = "Validation Error";
            this.formdata = null;
        }
        // debugger;
    }
    reset() {
        console.log("reset");
        this.formdata = null;
        this.model = new User();
        this.errorStatus = false;
    }
    trimStr(as: String) {
        return as.replace(/^\s+|\s+$/g, '');
    }
}