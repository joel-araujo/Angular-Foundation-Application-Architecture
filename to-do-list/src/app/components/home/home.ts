import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TaskInterface, TaskService } from '../../services/task';
import { CommonModule } from '@angular/common';
import { TaskCard } from '../task-card/task-card';

@Component({
  selector: 'app-home',
  imports: [CommonModule, TaskCard],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './home.css',
})


export class Home {
  constructor(public task:  TaskService) {}

  tasks: TaskInterface[] = [];

  ngOnInit() {
  this.tasks = this.task.getTasks();
  }

  toggleTask(id: number) {
  this.task.toggleTask(id);
  this.tasks = this.task.getTasks();
  }

  deleteTask(id: number) {
  this.task.deleteTask(id);
  this.tasks = this.task.getTasks();
  }
}
