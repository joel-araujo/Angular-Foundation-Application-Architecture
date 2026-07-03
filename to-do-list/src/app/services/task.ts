import { Injectable } from '@angular/core';

export interface TaskInterface {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})

export class Task {
  private tasksList: TaskInterface[] = [
    {id: 1, title: 'Task 1', description: 'Description for Task 1', completed: false},
    {id: 2, title: 'Task 2', description: 'Description for Task 2', completed: true},
    {id: 3, title: 'Task 3', description: 'Description for Task 3', completed: false}
  ];

  tasks = this.tasksList;

  getTasks(): TaskInterface[] {
    return this.tasksList;
  }
  
  addTask(task: TaskInterface): void {
    this.tasksList.push(task);
  }
}
