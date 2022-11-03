import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgCircleSuccessComponent } from './svg-circle-success.component';

describe('SvgCircleSuccessComponent', () => {
  let component: SvgCircleSuccessComponent;
  let fixture: ComponentFixture<SvgCircleSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgCircleSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgCircleSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
