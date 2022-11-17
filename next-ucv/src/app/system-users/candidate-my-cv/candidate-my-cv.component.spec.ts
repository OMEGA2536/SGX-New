import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateMyCvComponent } from './candidate-my-cv.component';

describe('CandidateMyCvComponent', () => {
  let component: CandidateMyCvComponent;
  let fixture: ComponentFixture<CandidateMyCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateMyCvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidateMyCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
