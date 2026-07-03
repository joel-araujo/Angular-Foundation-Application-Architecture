import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Task, TaskInterface } from '../../services/task';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './home.css',
})


export class Home {
  constructor(private task: Task) {}

  tasks: TaskInterface[] = [];

  ngOnInit() {
    this.tasks = this.task.getTasks();
  }
}
