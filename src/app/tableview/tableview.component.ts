import { Component, OnInit } from '@angular/core';
import { ChartsComponent } from '../charts/charts.component';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'tableview-root',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [ChartsComponent],

})
export class TableViewComponent {

  title2 = 'Table View';
  text: any;
  usersdata: any;
  popuptest: any;
  users = [];
  /* ngOnInit() {
     this.usersdata = this.chart.getItems();
   }*/
  constructor(private chart: ChartsComponent, private _https: Http) {
    this.usersdata = this.chart.fetchdata().then(res => {
      console.log("check table view " + res);
      this.users = JSON.parse(res._body).userslist;


    });

  }

  /* Now send your form using FormData */
  key: string = 'userId'; //set default
  reverse: boolean = false;
  isDesc: boolean = false;
  column: string = 'userId';
  sort(key) {
    console.log("sort");
    this.isDesc = !this.isDesc; //change the direction    
    this.column = key;
    let direction = this.isDesc ? 1 : -1;
    this.users.sort(function (a, b) {
      if (a[key] < b[key]) {
        return -1 * direction;
      }
      else if (a[key] > b[key]) {
        return 1 * direction;
      }
      else {
        return 0;
      }
    });
  }
  p: number = 1;
  csvHeader = ["userId", "userName", "userPhone"];

  downloadFile() {
    console.log("download csc ", this.users)
    /*let blob = new Blob(['\ufeff' + "a,a,c,d"], { type: 'text/csv;charset=utf-8;' });
    let dwldLink = document.createElement("a");
    let url = URL.createObjectURL(blob);*/

    let data = this.users;
    //  console.log('user date' + JSON.stringify(data));
    let csvHeader = this.csvHeader;
    let csvData = this.ConvertToCSV(data, csvHeader);
    let blob = new Blob([csvData], { type: 'text/csv' });
    let dwldLink = document.createElement("a");
    let url = window.URL.createObjectURL(blob);
    let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
    if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
      dwldLink.setAttribute("target", "_blank");
    }
    dwldLink.setAttribute("href", url);
    dwldLink.setAttribute("download", "Enterprise.csv");
    dwldLink.style.visibility = "hidden";
    document.body.appendChild(dwldLink);
    dwldLink.click();
    document.body.removeChild(dwldLink);
  }

  ConvertToCSV(objArray, headerList) {
    console.log('convert to array called', objArray);
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    var str = '';
    var row = 'S.No,';

    for (var index in headerList) { //objArray[0]
      //Now convert each value to string and comma-separated
      row += headerList[index] + ',';
    }
    row = row.slice(0, -1);
    //append Label row with line break
    str += row + '\r\n';
    for (var i = 0; i < array.length; i++) {
      var line = (i + 1) + '';
      for (var index in headerList) {//array[i]
        let head = headerList[index];
        //if (line != '') line += ','
        let value = array[i][head];
        if (value == null) value = 'NA';
        line += ',' + value;
      }
      str += line + '\r\n';
    }
    objArray = null;
    headerList = null;
    return str;
  }

  _formData: any;
  message: any;
  Name: string;
  myFile: File; /* property of File type */
  fileChange(files: any) {
    this.myFile = files[0];
  }

  onSubmit(files: any) {
    let formData: FormData = new FormData();
    formData.append('file', files);
    let headers = new Headers();
    /** No need to include Content-Type in Angular 4 
    headers.append('Content-Type', 'multipart/form-data');*/
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({ headers: headers });
    this._https.post(`https://blobstore-ls-ge.run.aws-usw02-pr.ice.predix.io/v1/blob`, formData, options)
      .map(res => res.json())
      .catch(error => Observable.throw(error))
      .subscribe(
      data => console.log('success'),
      error => console.log(error)
      )
  }

  fileChange2(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      let formData: FormData = new FormData();
      formData.append('file', file);
      let headers = new Headers();
      /** No need to include Content-Type in Angular 4
      headers.append('Content-Type', 'multipart/form-data'); */
      // headers.append('Accept', 'application/json');
      let options = new RequestOptions({ headers: headers });
      this._https.post(`https://blobstore-ls-ge.run.aws-usw02-pr.ice.predix.io/v1/blob`, formData, options)
        .map(res => res.json())
        .catch(error => Observable.throw(error))
        .subscribe(
        data => console.log('success'),
        error => console.log(error)
        )
    }
  }
  onNameKepup(event: any) {
    console.log("check ", event.target.value)
  }

  public uploadFile(fileToUpload: File) {
    const _formData = new FormData();
    _formData.append('file', fileToUpload);

    return this._https.post("https://blobstore-ls-ge.run.aws-usw02-pr.ice.predix.io/v1/blob", _formData);
  }
  onSubmit3(files: any): void {
    let _formData = new FormData();
    _formData.append("Name", this.Name);
    _formData.append("file", files[0].nativeElement);
    let body = this._formData;
    let headers = new Headers();
    console.log("_formData :", files[0].nativeElement)
    this.uploadFile(files[0].nativeElement)
      .subscribe((response) => {
        console.log('set any success actions...');
        return response;
      },
      (error) => {
        console.log('set any error actions...');
      });
  }


}
