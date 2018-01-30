import { Directive, ElementRef, HostListener, OnInit, Input, HostBinding } from '@angular/core';

@Directive({
    selector: '[highlight]'
})
export class Mydirective implements OnInit {

    @Input('bc') bc: string;
    ngOnInit(): void {
        this.highlight(this.bc);
        console.log('BC ', this.bc);
    }

    constructor(private ele: ElementRef) {
        ele.nativeElement.style.backgroundColor = 'black'
    }
    private highlight(color: String) {
        this.ele.nativeElement.style.backgroundColor = color;
    }
    @HostListener('mouseenter') mouseEnter() {
        this.highlight('green');
    }

    @HostListener('mouseleave') mouseLeave() {
        this.highlight('red');
    }

    @HostBinding('style.color') color: string;
    @HostBinding('attr.role') role = 'admin';

    @HostListener('click') onClick() {
        this.highlight('blue');
        this.role = this.role == 'admin' ? 'guest' : 'admin';
        this.color = this.color == 'goldenrod' ? 'black' : 'goldenrod';
    }
    /* @HostListener('keydown') newColor() {
         this.color = this.color == 'goldenrod' ? 'black' : 'goldenrod';
 
     }
 */
    /*  possibleColors = [
          'darksalmon', 'hotpink', 'lightskyblue', 'goldenrod', 'peachpuff',
          'mediumspringgreen', 'cornflowerblue', 'blanchedalmond', 'lightslategrey'
      ];*/

    /* @HostBinding('style.color') color: string;
     @HostBinding('style.border-color') borderColor: string;
 
     @HostListener('keydown') newColor() {
         const colorPick = Math.floor(Math.random() * this.possibleColors.length);
 
         this.color = this.borderColor = this.possibleColors[colorPick];
     }*/
}