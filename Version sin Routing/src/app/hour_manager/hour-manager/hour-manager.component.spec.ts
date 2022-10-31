import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourManagerComponent } from './hour-manager.component';

describe('HourManagerComponent', () => {
  let component: HourManagerComponent;
  let fixture: ComponentFixture<HourManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HourManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HourManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
