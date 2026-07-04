import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TaskInterface, TaskService } from '../../services/task';
import { CommonModule } from '@angular/common';
import { TaskCard } from '../task-card/task-card';

@Component({
  selector: 'app-to-do-list',
  imports: [CommonModule, TaskCard],
  templateUrl: './to-do-list.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './to-do-list.css',
})

export class ToDoList {
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
