import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskInterface } from '../../services/task';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-card',
  imports: [RouterModule, CommonModule],
  standalone: true,
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
})
export class TaskCard {
  @Input({ required: true }) task!: TaskInterface;

  @Output() toggle = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();
}
