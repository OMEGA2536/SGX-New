import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgSecurityComponent } from './svg-security.component';

describe('SvgSecurityComponent', () => {
  let component: SvgSecurityComponent;
  let fixture: ComponentFixture<SvgSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgSecurityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
