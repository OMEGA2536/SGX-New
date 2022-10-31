import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgArrowBottomComponent } from './svg-arrow-bottom.component';

describe('SvgArrowBottomComponent', () => {
  let component: SvgArrowBottomComponent;
  let fixture: ComponentFixture<SvgArrowBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgArrowBottomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgArrowBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
