import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoDetail } from './to-do-detail';

describe('ToDoDetail', () => {
  let component: ToDoDetail;
  let fixture: ComponentFixture<ToDoDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDoDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(ToDoDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
