import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgFileComponent } from './svg-file.component';

describe('SvgFileComponent', () => {
  let component: SvgFileComponent;
  let fixture: ComponentFixture<SvgFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
