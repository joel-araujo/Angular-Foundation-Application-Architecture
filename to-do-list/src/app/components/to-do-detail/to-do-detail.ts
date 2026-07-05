import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TaskInterface, TaskService } from '../../services/task';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-to-do-detail',
  imports: [CommonModule],
  templateUrl: './to-do-detail.html',
  styleUrl: './to-do-detail.css',
  changeDetection: ChangeDetectionStrategy.Eager,
})

export class ToDoDetail {
  task?: TaskInterface;
  id?: number;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const id = Number(params['id']);
      if (!id) return;

      const task = this.taskService.getTask(id);
      if (!task) return;

      this.task = task;
    });
  }

}
