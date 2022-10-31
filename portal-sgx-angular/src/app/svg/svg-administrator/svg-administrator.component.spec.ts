import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgAdministratorComponent } from './svg-administrator.component';

describe('SvgAdministratorComponent', () => {
  let component: SvgAdministratorComponent;
  let fixture: ComponentFixture<SvgAdministratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgAdministratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
