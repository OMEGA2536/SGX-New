import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateMyDataComponent } from './candidate-my-data.component';

describe('CandidateMyDataComponent', () => {
  let component: CandidateMyDataComponent;
  let fixture: ComponentFixture<CandidateMyDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateMyDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidateMyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
