import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from '../menu/items-menu';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
  host: {
    '(document:click)': 'onClick($event)',
    class: 'bg-primary'
  }
})
export class MenuItemComponent implements OnInit {
  
  @Input() menuItem!: MenuItem;

  public subMenuVisible: boolean = false;

  constructor(private router: Router, private elementRef: ElementRef) {};

  onClick(event: any) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.subMenuVisible = false
    }
  }

  ngOnInit(): void {
  }

  subMenuToggle(): void {
    this.subMenuVisible = !this.subMenuVisible
  }

  toPage(path: string): void {
    this.router.navigate([path])
  }
}
