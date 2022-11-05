import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organizational-data-register-form',
  templateUrl: './organizational-data-register-form.component.html',
  styleUrls: ['./organizational-data-register-form.component.css']
})
export class OrganizationalDataRegisterFormComponent implements OnInit {

  firstModalAttachmentsVisible: boolean = false;
  secondModalAttachmentsVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openFirstModalAttachments(): void {
    this.firstModalAttachmentsVisible = true;
  }

  closeFirstModalAttachments(): void {
    this.firstModalAttachmentsVisible = false;
  }

  openSecondModalAttachments(): void {
    this.secondModalAttachmentsVisible = true;
  }

  closeSecondModalAttachments(): void {
    this.secondModalAttachmentsVisible = false;
  }
}
