import { Component } from '@angular/core';

@Component({
    selector: 'app-vote-taker',
    template: `<div class="voter-dashboard-container">
    <h2> Is TCS-GE a good company to work in??</h2>
    <h3>Agree: {{agreed}}, Disagree: {{disagreed}}</h3>
    <app-voter *ngFor="let voter of voters"
       [name]="voter" [test]="in1"
      (onVoted)="onVoted($event)">
    </app-voter></div>
  `,
    styleUrls: ['./voter.component.css']

})
export class VoteTakerComponent {
    agreed = 0;
    in1 = 2;
    disagreed = 0;
    voters = ['Mr. ABCD', 'Ms. XYZ', 'IJK'];

    onVoted(agreed: boolean) {
        agreed ? this.agreed++ : this.disagreed++;
    }
}