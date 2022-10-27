import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgAccessComponent } from './svg-access.component';

describe('SvgAccessComponent', () => {
  let component: SvgAccessComponent;
  let fixture: ComponentFixture<SvgAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgAccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
