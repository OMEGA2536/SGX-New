import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgCircleErrorComponent } from './svg-circle-error.component';

describe('SvgCircleErrorComponent', () => {
  let component: SvgCircleErrorComponent;
  let fixture: ComponentFixture<SvgCircleErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgCircleErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgCircleErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
