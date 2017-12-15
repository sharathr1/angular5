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

  Name: string;
  myFile: File; /* property of File type */
  fileChange(files: any) {
    console.log(files);

    this.myFile = files[0].nativeElement;
  }

  /* Now send your form using FormData */
  _formData: any;
  message: any;
  onSubmit(): void {
    let _formData = new FormData();
    _formData.append("Name", this.Name);
    _formData.append("file", this.myFile);
    let body = this._formData;
    let headers = new Headers();
    /* let options = new Options({
       headers: headers
     });*/
    /*this._https.post("https://blobstore-ls-ge.run.aws-usw02-pr.ice.predix.io/v1/blob", body)
      .map((response: Response) => <string>response.json())
      .subscribe((data) => this.message = data);*/
    this.uploadFile(this.myFile)
      .subscribe((response) => {
        console.log('set any success actions...');
        return response;
      },
      (error) => {
        console.log('set any error actions...');
      });
  }

  public uploadFile(fileToUpload: File) {
    const _formData = new FormData();
    _formData.append('file', fileToUpload);
    _formData.append('file', fileToUpload);

    return this._https.post("https://blobstore-ls-ge.run.aws-usw02-pr.ice.predix.io/v1/blob", _formData);
  }

  onNameKepup(event: any) {
    console.log("check ", event.target.value)
  }
  get: any;
  getProfile() {
    console.log("check profile ");
    /*   this.get = */
    this._https.get("https://api.myjson.com/bins/n32sz")
      .subscribe(
      (data) => {
        console.log(this.get = data.json());
      });
  }

}
