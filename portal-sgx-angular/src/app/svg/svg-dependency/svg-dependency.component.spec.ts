import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgDependencyComponent } from './svg-dependency.component';

describe('SvgDependencyComponent', () => {
  let component: SvgDependencyComponent;
  let fixture: ComponentFixture<SvgDependencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgDependencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgDependencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
