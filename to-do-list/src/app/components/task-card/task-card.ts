import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskInterface } from '../../services/task';

@Component({
  selector: 'app-task-card',
  imports: [],
  standalone: true,
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
})
export class TaskCard {
  @Input({ required: true }) task!: TaskInterface;

  @Output() toggle = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();
}
