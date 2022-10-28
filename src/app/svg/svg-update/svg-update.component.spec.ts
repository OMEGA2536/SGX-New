import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgUpdateComponent } from './svg-update.component';

describe('SvgUpdateComponent', () => {
  let component: SvgUpdateComponent;
  let fixture: ComponentFixture<SvgUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
