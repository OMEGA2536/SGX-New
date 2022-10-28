import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor() { }

  public itemMenuVisible: boolean = false;

  ngOnInit(): void {
  }

  public toogleOptions(): void {
    this.itemMenuVisible = !this.itemMenuVisible;
  }
}
