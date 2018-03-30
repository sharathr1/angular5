import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from './person';

@Component({
    selector: 'tree-node',
    templateUrl: './tree-node.component.html',
    styleUrls: ['./tree-node.component.css']
})
export class TreeModuleComponent {
    @Input() data: Person;
    @Output() addChild = new EventEmitter<Person>();

    constructor() {
        this.myImage = "assets/633293890-plus.jpg";
    }
    myImage: String;
    addChildfn(datas) {
        console.log("emit ", datas)
        this.addChild.emit(datas);
    }
}
