import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/models/task.class';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-task-component',
  templateUrl: './create-task-component.component.html',
  styleUrls: ['./create-task-component.component.scss']
})
export class CreateTaskComponentComponent implements OnInit {

  task: Task = new Task();
  public tasks: Array<Task> = [];

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
   // localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.tasks = JSON.parse(localStorage.getItem('tasks') || '[]');

    // localStorage.setItem('tasks', JSON.stringify(this.tasks));
    // let tasksAsJSON = JSON.parse(localStorage.getItem('tasks') || '[]'); // [{}, {}, {}]

    // this.tasks = [];

    // tasksAsJSON.forEach((task:any) => {
    //   this.tasks.push(new Task(task));
    // });

    //   //.map((task: any) => {
    //   //  return new Task(task);
    //   //});
  }

  saveTask() {
    if (this.tasks.length <= 6) {
      this.tasks.push(this.task);
    }


    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.task = new Task();
    this.openSnackBar('The Task is save and sound in your local storage 🙌');
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, null, {
      duration: 4000,
    });
  }

}
