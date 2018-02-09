import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-tracker',
  templateUrl: './activity-tracker.component.html',
  styleUrls: ['./activity-tracker.component.css']
})
export class ActivityTrackerComponent {

  done: boolean;
  error: boolean;
  todos: any;
  newToDo: string;

  constructor() {
    this.error = false;
    this.newToDo = '';
    this.todos = [];
  }
  addMore() {
    console.log(this.newToDo.length);

    if (this.newToDo.length > 0) {
      let newToDoObj: any = { done: true, desc: '' };
      newToDoObj.desc = this.newToDo;
      this.todos.push(newToDoObj);
      newToDoObj = null;
      this.error = false;
    } else {
      this.error = true;
    }
  }

  clearAll() {
    this.todos = [];
    this.error = false;
  }

}
