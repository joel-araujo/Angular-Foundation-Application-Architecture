import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineTemplate } from './inline-template';

describe('InlineTemplate', () => {
  let component: InlineTemplate;
  let fixture: ComponentFixture<InlineTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InlineTemplate],
    }).compileComponents();

    fixture = TestBed.createComponent(InlineTemplate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
