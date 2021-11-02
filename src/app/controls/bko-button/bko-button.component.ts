import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'bko-button',
  templateUrl: './bko-button.component.html',
  styleUrls: ['./bko-button.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class BkoButtonComponent implements OnInit {

  @Input() icon: string | undefined;
  @Input() text: string | undefined;
  @Input() disabled: boolean | undefined;

  svgHref: string | undefined;

  constructor() { }

  ngOnInit(): void {
    this.svgHref = `/icons/icons.svg#${this.icon}`;
  }

}
