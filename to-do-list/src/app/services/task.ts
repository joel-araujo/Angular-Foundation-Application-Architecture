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
    {id: 1,title: 'Finish Angular Task Tracker UI',description: 'Improve the application design using Bootstrap, create responsive task cards, and finalize the navigation layout.',completed: false},
    {id: 2,title: 'Review project requirements',description: 'Go through the project documentation and make sure all requested features are implemented before submission.',completed: true},
    {id: 3,title: 'Fix routing issues',description: 'Investigate the task detail page navigation and make sure users can move between pages correctly.',completed: false},
    {id: 4,title: 'Create user registration form',description: 'Build a reactive Angular form with validation for creating new users.',completed: false},
    {id: 5,title: 'Prepare weekly report',description: 'Summarize completed work, current progress, and upcoming tasks for the team meeting.',completed: true},
    {id: 6,title: 'Update application dependencies',description: 'Check installed packages, update outdated dependencies, and verify that the application still builds correctly.',completed: false}
  ];

  getTasks(): TaskInterface[] {
    return this.tasksList;
  }

  getTask(id: number): TaskInterface | undefined {
    return this.tasksList.find(task => task.id === id);
  }

  toggleTask(id: number): void {
    this.tasksList = this.tasksList.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
  }

  deleteTask(id: number): void {
    this.tasksList = this.tasksList.filter(task => task.id !== id);
  }

  addTask(task: Omit<TaskInterface, 'id' | 'completed'>): void {
    const newTask: TaskInterface = {
      id: this.tasksList.length + 1,
      title: task.title,
      description: task.description,
      completed: false
    };
    this.tasksList.push(newTask);
  }
}