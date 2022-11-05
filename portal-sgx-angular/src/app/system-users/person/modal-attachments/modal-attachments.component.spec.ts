import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAttachmentsComponent } from './modal-attachments.component';

describe('ModalAttachmentsComponent', () => {
  let component: ModalAttachmentsComponent;
  let fixture: ComponentFixture<ModalAttachmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAttachmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAttachmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
