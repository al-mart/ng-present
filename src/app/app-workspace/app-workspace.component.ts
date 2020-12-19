import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-workspace',
  templateUrl: './app-workspace.component.html',
  styleUrls: ['./app-workspace.component.scss']
})
export class AppWorkspaceComponent implements OnInit {

  @Output()
  logoutChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  currentSection = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  links = [
    {
      id: 0,
      name: "Personal cabinet"
    },
    {
      id: 1,
      name: "My orders"
    }
  ];

  changeSection(id: number) {
    this.currentSection = id;
  }

  logout(){
    this.logoutChange.emit(true);
  }

}
