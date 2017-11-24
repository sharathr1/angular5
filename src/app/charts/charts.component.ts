import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  constructor(private http: Http) {

  }
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
    console.log("add");
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
  fetchdata() {
    console.log("Fetch Data");
    return this.http.get(`http://localhost:9093/itest/users`)
      .map((res: Response) => res.json())
      .subscribe(res => {
        this.userslist = res;
        for (var i = 0; i < res.userslist.length; i++) {
          this.items.push(res.userslist[i].userScore);
        }
        console.log(this.items.length);
        this.userslist = JSON.stringify(this.userslist);
        this.chartdata();
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
}
