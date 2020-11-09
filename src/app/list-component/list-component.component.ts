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

}
