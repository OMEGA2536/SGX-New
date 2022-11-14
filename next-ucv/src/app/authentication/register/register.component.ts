import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userType: number = 0;
  userTypes: object[] = [
    {
      id: 1,
      text: 'Candidato'
    },
    {
      id: 2,
      text: 'Empresa'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
