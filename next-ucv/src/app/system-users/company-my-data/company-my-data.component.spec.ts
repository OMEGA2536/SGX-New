import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyMyDataComponent } from './company-my-data.component';

describe('CompanyMyDataComponent', () => {
  let component: CompanyMyDataComponent;
  let fixture: ComponentFixture<CompanyMyDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyMyDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyMyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
