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

    this.menuItems.push(MenuItems.menuItemMyData);
    this.menuItems.push(MenuItems.menuItemPostOffer);
    this.menuItems.push(MenuItems.menuItemSeeMyOffers);
    this.menuItems.push(MenuItems.menuItemSearchResumes);
  }

  toPageView(path: string): void {
    this.clickMenuItem.emit();
    this.router.navigate([path]);
  }

  isCurrentSection(section: string): boolean {
    return this.currentSection === section;
  }
}
