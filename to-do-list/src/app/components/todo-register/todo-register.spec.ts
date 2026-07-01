import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoRegister } from './todo-register';

describe('TodoRegister', () => {
  let component: TodoRegister;
  let fixture: ComponentFixture<TodoRegister>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoRegister],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoRegister);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
