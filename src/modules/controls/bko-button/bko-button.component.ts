import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'bko-button',
  templateUrl: './bko-button.component.html',
  styleUrls: ['./bko-button.component.less']
})
export class BkoButtonComponent implements OnInit {

  @Input() icon: string | undefined;
  @Input() text: string | undefined;
  @Input() disabled = false;

  svgHref: string | undefined;

  constructor() { }

  ngOnInit(): void {
    this.svgHref = `assets/icons/icons.svg#${this.icon}`;
  }

}
