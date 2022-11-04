import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  @Input() arrayTabs: string[] = ['tab 1','tab 2'];
  @Output() clickTab = new EventEmitter();
  
  tabIndexActive: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onClickTab(indexTab: number): void {
    this.clickTab.emit(indexTab);
    this.tabIndexActive = indexTab;
  }

  isCurrentIndexTab(indexTab: number): boolean {
    return  indexTab === this.tabIndexActive;
  }
}
