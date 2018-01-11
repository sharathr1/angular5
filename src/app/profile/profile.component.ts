import { Component, OnInit, ElementRef, Inject, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var jquery: any;
declare var $: any;
@Component({
  selector: 'user-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.

  rForm: FormGroup;
  post: any;                     // A property for our submitted form
  description: string = '';
  name: string = '';


  elementRef: ElementRef;
  slideValue: number = 0;

  constructor(private fb: FormBuilder, @Inject(ElementRef) elementRef: ElementRef) {
    this.elementRef = elementRef;
    this.rForm = fb.group({
      'name': [null, Validators.required],
      'description': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])],
      'validate': ''
    });
  }

  ngOnInit() {
    /*    var $amount = jQuery(this.elementRef.nativeElement).find(".amount");
    */    /* $(this.elementRef.nativeElement).find(".slider").slider({
           range: false,
           orientation: "vertical",
           min: 0,
           max: 100,
           value: 60,
           slide: (event, ui) => {
             this.slideValue = ui.value;
             $amount.val(ui.value);
           }
         });*/
  }

  addPost(post) {
    this.description = post.description;
    this.name = post.name;
  }


}
