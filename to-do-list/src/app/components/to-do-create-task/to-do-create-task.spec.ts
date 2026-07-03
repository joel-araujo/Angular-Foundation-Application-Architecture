import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoCreateTask } from './to-do-create-task';

describe('ToDoCreateTask', () => {
  let component: ToDoCreateTask;
  let fixture: ComponentFixture<ToDoCreateTask>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDoCreateTask],
    }).compileComponents();

    fixture = TestBed.createComponent(ToDoCreateTask);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
