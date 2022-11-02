import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonDataRegisterFormComponent } from './person-data-register-form.component';

describe('PersonDataRegisterFormComponent', () => {
  let component: PersonDataRegisterFormComponent;
  let fixture: ComponentFixture<PersonDataRegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonDataRegisterFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonDataRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
