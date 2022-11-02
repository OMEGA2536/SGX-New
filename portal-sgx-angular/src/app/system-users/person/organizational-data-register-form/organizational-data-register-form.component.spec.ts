import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationalDataRegisterFormComponent } from './organizational-data-register-form.component';

describe('OrganizationalDataRegisterFormComponent', () => {
  let component: OrganizationalDataRegisterFormComponent;
  let fixture: ComponentFixture<OrganizationalDataRegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizationalDataRegisterFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationalDataRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
