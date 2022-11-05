import { Component, OnInit, ViewContainerRef } from '@angular/core';
import * as menuItems from '../menu/items-menu';
import { MenuItem } from '../menu/items-menu';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor() { }

  itemMenuVisible: boolean = false;
  menuItems: MenuItem[] = [];

  ngOnInit(): void {
    this.menuItems.push(menuItems.menuItemMyMenu);
    this.menuItems.push(menuItems.menuItemAdministrator);
    this.menuItems.push(menuItems.menuItemOperations);
    this.menuItems.push(menuItems.menuItemCommercial);
    this.menuItems.push(menuItems.menuItemSecurity);
  }

  toogleOptions(): void {
    this.itemMenuVisible = !this.itemMenuVisible;
  }
}
