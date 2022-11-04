import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgAttachedFilesComponent } from './svg-attached-files.component';

describe('SvgAttachedFilesComponent', () => {
  let component: SvgAttachedFilesComponent;
  let fixture: ComponentFixture<SvgAttachedFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgAttachedFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgAttachedFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
