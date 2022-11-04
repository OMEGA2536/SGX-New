import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  public personDetailsVisible: boolean = false;
  public personSearchVisible: boolean = false;
  
  constructor(private router: Router) { }

  openPersonDetailsModal(): void {
    this.personDetailsVisible = true;
  }

  closePersonDetailsModal(): void {
    this.personDetailsVisible = false;
  }

  openPersonSearchModal(): void {
    this.personSearchVisible = true
  }

  closePersonSearchModal(): void {
    this.personSearchVisible = false
  }

  toPersonRegisterView(): void {
    this.router.navigate(['/system-users/person/register']);
  }

  ngOnInit(): void {
  }

}
