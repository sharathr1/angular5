import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { User } from '../register/user';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  popupView: boolean = false;
  constructor(private http: Http) {

  }
  user: User;
  chart: any;
  defaultChart() {
    this.chart = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: 'Linechart'
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Line 1',
        data: [1, 2, 3]
      }]
    });
  }
  // add point to chart serie
  add() {
/*    this.postpoints();
*/    console.log("add");
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }

  ngOnInit() {
    this.defaultChart();
    this.optionschart();
    this.fetchdata();
  }
  options: Object;
  options2: Object;
  options3: Object;
  dynamicdata: Object;
  userslist: any;
  userslistObj: any;
  items: Array<any> = [];

  optionschart() {
    this.options = new Chart({
      title: { text: 'Angular Chart' },
      chart: { zoomType: 'y' },
      series: [
        { name: 'A1', data: [29.9, 71.5, 106.4, 129.2, 45, 13, 120, 29.9, 71.5, 106.4, 29.2, 45, 13, 120], },
        { name: 'B1', data: [-29.9, 4, -106.4, 0, 10, -100, 120, -29.9, 4, -106.4, 45, 10, -100, 120] }
      ]
    });
  }

  fetchdata(): Promise<any> {
    console.log("Fetch Data");
    return this.http.get(`http://localhost:9093/itest/users`)
      .toPromise()
      .then(res => {
        this.userslistObj = res.json();
        for (var i = 0; i < res.json().userslist.length; i++) {
          this.items.push(res.json().userslist[i].userScore);
        }
        console.log("chart data ", JSON.stringify(this.userslistObj));
        this.chartdata();
        return res;
      });
  }
  chartdata() {
    console.log("chart data", JSON.stringify(this.items))
    this.dynamicdata = new Chart({
      title: { text: 'Angular Chart1' },
      chart: { zoomType: 'y' },
      series: [
        { name: 'A1', data: this.items },
      ]
    });
  }

  from: any;
  to: any;
  onChartSelection(e) {
    this.from = e.originalEvent.xAxis[0].min.toFixed(2);
    this.to = e.originalEvent.xAxis[0].max.toFixed(2);
  }
  userId: any;
  userScore: any;
  postpoints2(id, score) {
    if (id > 0) {
      console.log(id, score);
      this.popupView = true;
      const body = [{ userId: id, userScore: score }];
      this.http.post('http://localhost:9093/itest/users', body)
        .subscribe(
        );
      this.items = [];
/*      setTimeout(() => { this.fetchdata(); }, 500);
*/    }
  }

  popupViewer() {
    this.popupView = true;
  }


  postpoints(id, score) {
    console.log(id, score)
    let promise = new Promise((resolve, reject) => {
      const body = [{ userId: id, userScore: score }];
      this.http.post('http://localhost:9093/itest/users', [{ userId: id, userScore: score }])
        .toPromise()
        .then((result) => {
          console.log("ok: ", JSON.stringify(result));
          this.items = [];
          this.fetchdata();
        }
        );

    });
  }

  userS = {
    "userslist": [
      {
        "userId": 0,
        "userScore": 55,
        "userName": "Sharath",
        "userPhone": "12"
      },
      {
        "userId": 1,
        "userScore": 50,
        "userName": "Swagath",
        "userPhone": "8564"
      },
      {
        "userId": 2,
        "userScore": 55,
        "userName": "Akshay",
        "userPhone": "75400"
      },
      {
        "userId": 3,
        "userScore": 55,
        "userName": "Hemanth",
        "userPhone": "2548"
      },
      {
        "userId": 4,
        "userScore": 40,
        "userName": "Abhishek",
        "userPhone": null
      },
      {
        "userId": 5,
        "userScore": 10,
        "userName": "Indhudhar",
        "userPhone": "8895"
      },
      {
        "userId": 6,
        "userScore": 75,
        "userName": "Teja",
        "userPhone": null
      },
      {
        "userId": 8,
        "userScore": 80,
        "userName": "Jithin",
        "userPhone": null
      },
      {
        "userId": 9,
        "userScore": 45,
        "userName": "Gagan",
        "userPhone": "007"
      },
      {
        "userId": 10,
        "userScore": 0,
        "userName": "Hari",
        "userPhone": null
      }
    ]
  };

}
