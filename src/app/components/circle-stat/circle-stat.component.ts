import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'circle-stat',
  templateUrl: './circle-stat.component.html',
  styleUrls: ['./circle-stat.component.scss']
})
export class CircleStatComponent implements OnInit {

  @Input()
  orderPercentage: number = 0;
  @Input()
  displayMessage: string = '';
  @Input()
  isTotal: boolean = false;
  @Input()
  total: number = 100;

  constructor() { }

  ngOnInit(): void {
  }

}
