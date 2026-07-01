import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFormReactive } from './employee-form-reactive';

describe('EmployeeFormReactive', () => {
  let component: EmployeeFormReactive;
  let fixture: ComponentFixture<EmployeeFormReactive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeFormReactive],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeFormReactive);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
