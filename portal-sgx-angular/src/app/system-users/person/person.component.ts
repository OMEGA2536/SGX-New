import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  visiblePersonDetailsModal: boolean = false;
  visiblePersonSearchModal: boolean = false;
  visibleGenerateLinkModal: boolean = false;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openPersonDetailsModal(): void {
    this.visiblePersonDetailsModal = true;
  }

  closePersonDetailsModal(): void {
    this.visiblePersonDetailsModal = false;
  }

  openPersonSearchModal(): void {
    this.visiblePersonSearchModal = true
  }

  closePersonSearchModal(): void {
    this.visiblePersonSearchModal = false
  }

  closeGenerateLinkModal(): void {
    this.visibleGenerateLinkModal = false;
  }

  toPersonRegisterView(): void {
    this.router.navigate(['/system-users/person/register']);
  }

}
