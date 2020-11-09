import { Component, Input, OnInit } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.scss']
})
export class ListComponentComponent implements OnInit {
  tasks = JSON.parse(localStorage.getItem('tasks'));

  constructor() { }
  ngOnInit(): void {

  }

  orderBy(attribute: string) {
    this.tasks = this.tasks.sort((taska, taskb) => {
      return ('' + taska[attribute]).localeCompare(taskb[attribute]);
    });
  }

  delete(info) {
    this.tasks = this.tasks.filter(t => t !== info);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

}
