import { Injectable } from '@angular/core';

export interface TaskInterface {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

@Injectable({ providedIn: 'root' })

export class TaskService {
  private tasksList: TaskInterface[] = [
    { id: 1, title: 'Task 1', description: 'Description for Task 1', completed: false },
    { id: 2, title: 'Task 2', description: 'Description for Task 2', completed: true },
    { id: 3, title: 'Task 3', description: 'Description for Task 3', completed: false }
  ];

  getTasks(): TaskInterface[] {
    return this.tasksList;
  }

  toggleTask(id: number): void {
    console.log(`Toggling task with id: ${id}`);

    this.tasksList = this.tasksList.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
  }

  deleteTask(id: number): void {
    console.log(`Deleting task with id: ${id}`);
    
    this.tasksList = this.tasksList.filter(task => task.id !== id);
  }
}