import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgQuestionComponent } from './svg-question.component';

describe('SvgQuestionComponent', () => {
  let component: SvgQuestionComponent;
  let fixture: ComponentFixture<SvgQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
