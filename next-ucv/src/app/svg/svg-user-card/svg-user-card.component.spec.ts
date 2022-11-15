import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgUserCardComponent } from './svg-user-card.component';

describe('SvgUserCardComponent', () => {
  let component: SvgUserCardComponent;
  let fixture: ComponentFixture<SvgUserCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgUserCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgUserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
