import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'personal-cabinet',
  templateUrl: './personal-cabinet.component.html',
  styleUrls: ['./personal-cabinet.component.scss']
})
export class PersonalCabinetComponent implements OnInit {
  ngOnInit() {
  }

  orders = [
    {
      message: "Total",
      percent:100,
      isTotal: true,
      total: 100
    },
    {
      message: "In Progress",
      percent:12,
      total: 100
    },
    {
      message: "Done",
      percent:88,
      total: 100
    },
  ];
  executors = [
    {
      message: "Total",
      percent: 10,
      isTotal: true,
      total: 10
    },
    {
      message: "My executors",
      percent: 2,
      total: 10
    }
  ];
  tasks = [
    {
      message: "Total",
      percent:100,
      isTotal: true,
      total: 100
    },
    {
      message: "Done",
      percent: 44,
      total: 100
    },
    {
      message: "In progress",
      percent: 56,
      total: 100
    },
    {
      message: "Under Check",
      percent: 20,
      isTotal: true,
      total: 20
    },
  ];
}
