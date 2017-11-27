import { Component } from '@angular/core';

import { FECompoment } from '../fe/fe.component';

@Component({
  selector: 'snippet-root',
  templateUrl: './snippet.component.html',
  styleUrls: ['./snippet.component.css'],
  providers: [FECompoment],
})
export class SnippetComponent {
  title2 = 'Code Snippet';
  text: any;
  popuptest: any;
  constructor(private fe: FECompoment) {
    this.text = fe.getFullName();
    /* private p: PopComponent
     this.popuptest = p.ClickButton();*/
  }
  /* Now send your form using FormData */
  key: string = 'name'; //set default
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  p: number = 1;

  games = [
    {
      "id": "1",
      "name": "DOTA 2",
      "genre": "Strategy"
    },
    {
      "id": "2",
      "name": "AOE 3",
      "genre": "Strategy"
    },
    {
      "id": "3",
      "name": "GTA 5",
      "genre": "RPG"
    },
    {
      "id": "4",
      "name": "Far Cry 3",
      "genre": "Action"
    },
    {
      "id": "5",
      "name": "GTA San Andreas",
      "genre": "RPG"
    },
    {
      "id": "6",
      "name": "Hitman",
      "genre": "Action"
    },
    {
      "id": "7",
      "name": "NFS MW",
      "genre": "Sport"
    }, {
      "id": "8",
      "name": "Fifa 16",
      "genre": "Sport"
    }, {
      "id": "9",
      "name": "NFS Sen 2",
      "genre": "Sport"
    }, {
      "id": "10",
      "name": "Witcher Assasins on King",
      "genre": "Adventure"
    }
  ]
}
