import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonSearchModalComponent } from './person-search-modal.component';

describe('PersonSearchModalComponent', () => {
  let component: PersonSearchModalComponent;
  let fixture: ComponentFixture<PersonSearchModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonSearchModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonSearchModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
