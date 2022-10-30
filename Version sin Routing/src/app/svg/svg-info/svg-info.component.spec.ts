import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgInfoComponent } from './svg-info.component';

describe('SvgInfoComponent', () => {
  let component: SvgInfoComponent;
  let fixture: ComponentFixture<SvgInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
