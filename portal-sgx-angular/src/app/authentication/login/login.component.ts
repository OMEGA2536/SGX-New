import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  modalRestoredPasswordVisible: boolean = false;
  modalSuccessSendPasswordVisible: boolean = false;
  modalErrorEmailVisible: boolean = false;
  alertVisible: boolean = false;

  ngOnInit(): void {
  }

  openModalRestoredPassword(): void {
    this.modalRestoredPasswordVisible = true;
  }

  closeModalRestoredPassword(): void {
    this.modalRestoredPasswordVisible = false;
    this.modalErrorEmailVisible = true;
  }

  sendEmail(): void {
    // logic send email
    this.modalRestoredPasswordVisible = false;
    this.modalSuccessSendPasswordVisible = true;
  }

  closeModalSuccessSendPassword(): void {
    this.modalSuccessSendPasswordVisible = false;
  }

  closeModalErrorEmail(): void {
    this.modalErrorEmailVisible = false;
  }
}
