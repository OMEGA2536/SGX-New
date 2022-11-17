import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  userTypes: object[] = [
    {
      type: 'Candidate',
      value: 1
    },
    {
      type: 'Empresa',
      value: 2
    }
  ]
  userType: number = 0;

  ngOnInit(): void {
  }

  toRegisterView = () => this.router.navigate(['/authentication/register']);

  toMyDataView = () => {

    localStorage.setItem('userType', String(this.userType));

    if (this.userType === 1) {
      this.router.navigate(['/system-users/candidate/my-data']);
    } else {
      this.router.navigate(['/system-users/company/my-data']);
    }
  }

  toRecoverPasswordView = () => this.router.navigate(['/authentication/recover-password']);
}
