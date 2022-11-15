import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgMegaphoneComponent } from './svg-megaphone.component';

describe('SvgMegaphoneComponent', () => {
  let component: SvgMegaphoneComponent;
  let fixture: ComponentFixture<SvgMegaphoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgMegaphoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgMegaphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
