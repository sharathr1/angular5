import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pdfreader',
  templateUrl: './pdfreader.component.html',
  styleUrls: ['./pdfreader.component.css']
})
export class PdfreaderComponent implements OnInit {
  pdfSrc: any;

  constructor(private http: Http) {
    /*    this.pdfSrc = '../../document.pdf';
    */
    this.pdfSrc = 'assets/document.pdf';

    // this.pdfSrc = 'http://3.209.196.136:3000/files/DOC1697152_Rev1.pdf';
    /*    this.pdfSrc = this.http.get('document.pdf');
      */    // debugger;
    // console.log("check ", this.pdfSrc);
  }
  /*  pdfSrc: string = '../document.pdf';
  */  // pdfSrc: string = 'http://3.209.196.136:3000/files/DOC1697152_Rev1.pdf';


  ngOnInit() {

  }

}
