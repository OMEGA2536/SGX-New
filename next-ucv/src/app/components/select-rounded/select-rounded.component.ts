import { SelectComponent } from './../select/select.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-rounded',
  templateUrl: './select-rounded.component.html',
  styleUrls: ['./select-rounded.component.css']
})
export class SelectRoundedComponent extends SelectComponent implements OnInit {

  constructor() {
    super();
   }

  override ngOnInit(): void {
    
  }
}
