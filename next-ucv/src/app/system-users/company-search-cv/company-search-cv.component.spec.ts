import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySearchCvComponent } from './company-search-cv.component';

describe('CompanySearchCvComponent', () => {
  let component: CompanySearchCvComponent;
  let fixture: ComponentFixture<CompanySearchCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanySearchCvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanySearchCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
