import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgArrowLeftComponent } from './svg-arrow-left.component';

describe('SvgArrowLeftComponent', () => {
  let component: SvgArrowLeftComponent;
  let fixture: ComponentFixture<SvgArrowLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgArrowLeftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgArrowLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
