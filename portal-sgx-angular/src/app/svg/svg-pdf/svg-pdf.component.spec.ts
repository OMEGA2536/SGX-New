import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgPdfComponent } from './svg-pdf.component';

describe('SvgPdfComponent', () => {
  let component: SvgPdfComponent;
  let fixture: ComponentFixture<SvgPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgPdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
