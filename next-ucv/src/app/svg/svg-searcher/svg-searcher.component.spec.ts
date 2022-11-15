import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgSearcherComponent } from './svg-searcher.component';

describe('SvgSearcherComponent', () => {
  let component: SvgSearcherComponent;
  let fixture: ComponentFixture<SvgSearcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgSearcherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgSearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
