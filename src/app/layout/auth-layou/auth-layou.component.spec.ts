import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLayouComponent } from './auth-layou.component';

describe('AuthLayouComponent', () => {
  let component: AuthLayouComponent;
  let fixture: ComponentFixture<AuthLayouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthLayouComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthLayouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
