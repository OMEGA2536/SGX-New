import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyPostOfferComponent } from './company-post-offer.component';

describe('CompanyPostOfferComponent', () => {
  let component: CompanyPostOfferComponent;
  let fixture: ComponentFixture<CompanyPostOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyPostOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyPostOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
