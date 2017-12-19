import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formdata',
  templateUrl: './formdata.component.html',
  styleUrls: ['./formdata.component.css']
})
export class FormdataComponent implements OnInit {

  nameForm: FormGroup;
  model = {
    firstname: "",
    lastname: ""
  }
  constructor() {
  }

  ngOnInit() {
    this.nameForm = new FormGroup({
      firstname: new FormControl('', {
        validators: [Validators.required, Validators.minLength(8)],
        updateOn: 'change'
      }),
      lastname: new FormControl('', {
        validators: Validators.required,
        updateOn: 'change'
      })
    });

  }
}

