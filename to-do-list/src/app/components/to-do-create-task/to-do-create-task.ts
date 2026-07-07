import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskService } from '../../services/task';

@Component({
  selector: 'app-to-do-create-task',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './to-do-create-task.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './to-do-create-task.css',
}
)

export class ToDoCreateTask {
  createTaskForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService
  ) {}

  ngOnInit() {
    this.createTaskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['']
    });
  }

  onSubmit() {
    if (this.createTaskForm.invalid) {
      return;
    }

    this.taskService.addTask(this.createTaskForm.value);
    this.createTaskForm.reset();
  }
}
