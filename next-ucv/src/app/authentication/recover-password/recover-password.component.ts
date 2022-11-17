import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toLoginView = () => this.router.navigate(['/authentication/login']);
}
