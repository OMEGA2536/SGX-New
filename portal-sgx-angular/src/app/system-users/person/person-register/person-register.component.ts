import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-person-register',
  templateUrl: './person-register.component.html',
  styleUrls: ['./person-register.component.css']
})
export class PersonRegisterComponent implements OnInit {

  showIndexForm: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
