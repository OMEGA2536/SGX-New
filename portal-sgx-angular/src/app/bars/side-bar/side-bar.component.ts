import { Component, OnInit } from '@angular/core';
import * as ItemsMenu from './items-menu';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
// @Directive({
//   selector: '[adHost]',
// })
export class SideBarComponent implements OnInit {

  // constructor(private cfr: ComponentFactoryResolver) { }

  public itemMenuVisible: boolean = false;
  // @ViewChild('dynamic', {read: ViewContainerRef}) private viewRef: ViewContainerRef;

  ngOnInit(): void {

    const itemsMenu: any[] = [];
    itemsMenu.push(ItemsMenu.ItemAdministrator);
    itemsMenu.push(ItemsMenu.ItemCommercial);

    for (const itemMenu of itemsMenu) {
      console.log(itemMenu);
    }
  }

  public toogleOptions(): void {
    this.itemMenuVisible = !this.itemMenuVisible;
  }
}
