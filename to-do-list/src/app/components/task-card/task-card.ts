import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskInterface } from '../../services/task';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-task-card',
  imports: [RouterModule],
  standalone: true,
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
})
export class TaskCard {
  @Input({ required: true }) task!: TaskInterface;

  @Output() toggle = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();
}
