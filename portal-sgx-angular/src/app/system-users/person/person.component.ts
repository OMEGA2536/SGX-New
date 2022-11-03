import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  public modalPersonDetailsVisible: boolean = false;
  
  constructor(private router: Router) { }

  openModalPersonDetails(): void {
    this.modalPersonDetailsVisible = true;
  }

  closeModalPersonDetails(): void {
    this.modalPersonDetailsVisible = false;
  }

  toPersonRegister(): void {
    this.router.navigate(['/system-users/person/register']);
  }

  ngOnInit(): void {
  }

}
