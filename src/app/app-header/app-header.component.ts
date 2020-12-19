import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  @Output()
  loginChange: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  isLoggedIn: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  loginClicked(){
    this.loginChange.emit();
  }
}
