import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgCircleDeleteComponent } from './svg-circle-delete.component';

describe('SvgCircleDeleteComponent', () => {
  let component: SvgCircleDeleteComponent;
  let fixture: ComponentFixture<SvgCircleDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgCircleDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgCircleDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
