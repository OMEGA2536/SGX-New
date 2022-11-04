import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonRecordComponent } from './person-record.component';

describe('PersonRecordComponent', () => {
  let component: PersonRecordComponent;
  let fixture: ComponentFixture<PersonRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
