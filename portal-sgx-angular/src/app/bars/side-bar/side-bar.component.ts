import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { SvgAddComponent } from 'src/app/svg/svg-add/svg-add.component';
import { SvgAdministratorComponent } from 'src/app/svg/svg-administrator/svg-administrator.component';
import { SvgOperationsComponent } from 'src/app/svg/svg-operations/svg-operations.component';
import { SvgInsertionDirective } from '../svg-insertion.directive';
import * as ItemsMenu from './items-menu';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private viewContainerRef: ViewContainerRef) { }

  public itemMenuVisible: boolean = false;

  @ViewChild(SvgInsertionDirective, { static: true })
  svgInsertionDirective!: SvgInsertionDirective;

  ngOnInit(): void {

    this.loadDynamicComponent();

    const itemsMenu: any[] = [];
    itemsMenu.push(ItemsMenu.ItemAdministrator);
    itemsMenu.push(ItemsMenu.ItemCommercial);

    for (const itemMenu of itemsMenu) {
      console.log(itemMenu);
    }
  }

  public loadDynamicComponent() {
    this.svgInsertionDirective.viewContainerRef.createComponent(SvgAddComponent);
  }

  public toogleOptions(): void {
    this.itemMenuVisible = !this.itemMenuVisible;
  }
}
