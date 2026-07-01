import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalTemplate } from './external-template';

describe('ExternalTemplate', () => {
  let component: ExternalTemplate;
  let fixture: ComponentFixture<ExternalTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExternalTemplate],
    }).compileComponents();

    fixture = TestBed.createComponent(ExternalTemplate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
