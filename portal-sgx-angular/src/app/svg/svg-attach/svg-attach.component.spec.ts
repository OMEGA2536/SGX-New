import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgAttachComponent } from './svg-attach.component';

describe('SvgAttachComponent', () => {
  let component: SvgAttachComponent;
  let fixture: ComponentFixture<SvgAttachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgAttachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgAttachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
