import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgMenuComponent } from './svg-menu.component';

describe('SvgMenuComponent', () => {
  let component: SvgMenuComponent;
  let fixture: ComponentFixture<SvgMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
