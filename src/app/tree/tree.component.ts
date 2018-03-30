import { Component, OnInit } from '@angular/core';
import { Person, PersonList } from './person';
import * as Rx from 'rxjs';
import { Response } from '@angular/http';

declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
  providers: [Person]

})
export class TreeComponent {
  person: Person;
  members: Array<Person>;

  constructor(private p: Person) {
    p.id = 1;
    p.name = "Sharath R";
    p.phone = 88977494;
    this.person = p;
    this.members = this._group;
  }
  group = [];
  addChild(data) {
    console.log("Event :", data);
    this.getDataSet().map(i => {
      if (i.id === data.id) {
        let p = new Person;
        p.name = "MSD";
        p.id = 7;
        p.phone = 8484848;
        i.children.push(p);
      }
      this.group.push(i);
    });
    console.log("Filter ", this.getChild(data));
  }
  getChild(data) {
    return this._group.filter(i => {
      if (i.id === data.id) {
        return i.children;
      }
    });
  }
  getfilterdata() {
    this.group = this._group;
    debugger;
    let a = Rx.Observable.from(this.group).filter(a => a.id > 1)   // <2>
      .map(i => "Mr :" + i.name) // <3>
      .subscribe(    // <4>
      /* res => console.log(res),
       err => console.error(err),
       () => console.log("Streaming is over", )*/
      a => a = a
      );
    console.log("a ", a)

  }
  getfilterdata2() {
    console.log("dd ", this.getfilterdata())
  }
  test() {

  }
  getDataSet() {
    if (this.group.length > 0) {
      this._group = this.group;
    }
    console.log(this._group);
    return this._group;
  }

  setDataSet() {
    this.members = this.group;
    this._group = this.group;
    return this.members;
  }
  _group = [{
    id: 1,
    name: "Sharath",
    phone: 90909, children: []
  }, {
    id: 2,
    name: "SR",
    phone: 90909, children: []
  }, {
    id: 3,
    name: "SRT",
    phone: 90909, children: []
  }]
  //----------------------------------------------------------------

  testPromise() {
    let promise = new Promise(res => {
      setTimeout(() => {
        console.log("Promise Timieout");
      }, 2500)
    });
    promise.then(res => console.log(res));
  }

  //----------------------------------------------------------------
  gettest() {
    let task_names: Array<any>;
    this._tasks.forEach(function (task) {
      task_names.push(task.name);
    });
    debugger;
  }
  _tasks = [

    {

      'name': 'Write for Envato Tuts+',

      'duration': 120

    },

    {

      'name': 'Work out',

      'duration': 60

    },

    {

      'name': 'Procrastinate on Duolingo',

      'duration': 240

    }

  ];


}
