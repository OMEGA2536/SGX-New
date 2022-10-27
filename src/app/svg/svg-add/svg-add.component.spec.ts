import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgAddComponent } from './svg-add.component';

describe('SvgAddComponent', () => {
  let component: SvgAddComponent;
  let fixture: ComponentFixture<SvgAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
