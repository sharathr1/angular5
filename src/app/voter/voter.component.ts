import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-voter',
    template: `
    <div class="voter-container">
    <h4>{{name}}</h4>{{test}}
    <button (click)="vote(true)"  [disabled]="voted">Agree</button>
    <button (click)="vote(false)" [disabled]="voted">Disagree</button> <div>
  `,
    styleUrls: ['./voter.component.css']
})
export class VoterComponent {
    @Input() test: String;
    @Input() name: string;
    @Output() onVoted = new EventEmitter<boolean>();
    voted = false;

    vote(agreed: boolean) {
        this.onVoted.emit(agreed);
        this.voted = true;
    }
}