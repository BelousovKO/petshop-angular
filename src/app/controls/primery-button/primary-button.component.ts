import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.less']
})
export class PrimaryButtonComponent implements OnInit {

  @Input() icon: string | undefined;
  @Input() text: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
