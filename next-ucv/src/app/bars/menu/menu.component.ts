import { ActivationEnd, Router } from '@angular/router';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuItem } from './menuItems';
import * as MenuItems from './menuItems';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  @Output() clickMenuItem = new EventEmitter();

  menuItems: MenuItem[] = [];
  currentSection: string = '';
  menuGrid: string = '';

  constructor(private router :Router) {

    router.events.subscribe((event: any) => {
      if (event instanceof ActivationEnd) {
        if (event.snapshot.data['section']) {
          this.currentSection = event.snapshot.data['section'];
        }
      }  
    });
  }

  ngOnInit(): void {

    let userType: number = parseInt(localStorage.getItem('userType') || '0');

    if (userType === 1) {
      this.menuItems.push(MenuItems.candidateMyData);
      this.menuItems.push(MenuItems.candidateMyCv);
      this.menuItems.push(MenuItems.candidateRecomended);
      this.menuItems.push(MenuItems.candidateMyApplications);
      this.menuItems.push(MenuItems.candidateMyInterviews);

    } else {
      this.menuItems.push(MenuItems.companyMyData);
      this.menuItems.push(MenuItems.companyPostOffer);
      this.menuItems.push(MenuItems.companyMyOffers);
      this.menuItems.push(MenuItems.companySearchResumes);
    }

    this.menuGrid = `grid grid-cols-${this.menuItems.length} gap-x-1 mb-16`;
  }

  toPageView(path: string): void {
    this.clickMenuItem.emit();
    this.router.navigate([path]);
  }

  isCurrentSection(section: string): boolean {
    return this.currentSection === section;
  }
}
