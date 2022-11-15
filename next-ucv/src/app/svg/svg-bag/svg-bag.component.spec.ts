import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgBagComponent } from './svg-bag.component';

describe('SvgBagComponent', () => {
  let component: SvgBagComponent;
  let fixture: ComponentFixture<SvgBagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgBagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgBagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
