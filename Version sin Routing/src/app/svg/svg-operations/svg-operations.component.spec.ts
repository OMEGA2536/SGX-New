import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgOperationsComponent } from './svg-operations.component';

describe('SvgOperationsComponent', () => {
  let component: SvgOperationsComponent;
  let fixture: ComponentFixture<SvgOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgOperationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
