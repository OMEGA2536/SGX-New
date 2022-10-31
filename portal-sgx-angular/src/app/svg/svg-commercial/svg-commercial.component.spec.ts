import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgCommercialComponent } from './svg-commercial.component';

describe('SvgCommercialComponent', () => {
  let component: SvgCommercialComponent;
  let fixture: ComponentFixture<SvgCommercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgCommercialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgCommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
