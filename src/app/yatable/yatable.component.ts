import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../register/user';
import { ChartsComponent } from '../charts/charts.component';
@Component({
  selector: 'app-yatable',
  templateUrl: './yatable.component.html',
  styleUrls: ['./yatable.component.css']
})
export class YatableComponent implements OnInit {
  usersdata: any;
  users: any;
  public datasource: any;
  public isFirstChange = true;
  constructor(private chart: ChartsComponent) {
    this.fecthchartdata();

  }
  fecthchartdata() {
    this.usersdata = this.chart.fetchdata().then(res => {
      console.log("check table view " + res);
      this.users = JSON.parse(res._body).userslist;
      this.datasource = this.users;
      return this.users;
    });
  }

  isDataAvailable: boolean = false;
  ngOnInit() {
  }
  public options: any = {
    orderMulti: false,
    className: ['table-striped'],
    language: "en"
  };

  /*public datasource: any = (request: any): Observable<any> => {
    /*    return this.service.getUsers(request);
    
  console.log("U :" + this.users)
    return this.users;
  }*/

  public paging: any = {
    itemsPerPage: 10,
    itemsPerPageOptions: [10, 25, 50, 100],
    maxSize: 5
  }

  public columns: Array<any> = [
    {
      title: 'Name',
      name: 'name',
      sort: true,
      defaultSortOrder: 'asc',
      filter: {
        type: 'default',
        controlType: 'default',
        config: {
          placeholder: 'Filter by name'
        }
      }
    },
    {
      title: 'Username',
      name: 'username',
      sort: true,
      filter: {
        type: 'default',
        controlType: 'default',
        config: {
          placeholder: 'Filter by username'
        }
      }
    },
    {
      title: 'Email',
      name: 'email',
      sort: true,
      filter: {
        type: 'default',
        controlType: 'default',
        config: {
          placeholder: 'Filter by email'
        }
      }
    },
    {
      sort: false,
      title: '',
      name: 'btnEdit',
      render: (data: any, row: User): string => {
        return "<div class='text-center'>" +
          "<button type='button' class='btn btn-sm btn-primary'><span class='glyphicon glyphicon-pencil'></span></button> " +
          "</div>";
      },
      action: (data: any, row: User): any => {
        alert("Id: " + row.user_id);
      }
    },
    {
      sort: false,
      title: '',
      name: 'btnDelete',
      render: (data: any, row: User): string => {
        return "<div class='text-center'>" +
          "<button type='button' class='btn btn-sm btn-danger'><span class='glyphicon glyphicon-trash'></span></button> " +
          "</div>";
      },
      action: (data: any, row: User): any => {
        alert("Id: " + row.user_id);
      }
    }];

}
