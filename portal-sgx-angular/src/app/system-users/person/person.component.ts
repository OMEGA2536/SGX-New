import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  public modalDetailsPersonVisible: boolean = false;
  
  constructor(private router: Router) { }

  showDetailsPerson(): void {
    this.modalDetailsPersonVisible = true;
  }

  hideDetailsPerson(): void {
    this.modalDetailsPersonVisible = false;
  }

  toPersonRegister(): void {
    this.router.navigate(['/system-users/person/register']);
  }

  ngOnInit(): void {
  }

}
