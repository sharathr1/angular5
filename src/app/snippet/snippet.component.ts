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
}
