import { Component, Input, OnInit, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-chips',
  templateUrl: './input-chips.component.html',
  styleUrls: ['./input-chips.component.css']
})
export class InputChipsComponent implements OnInit {

  @Input() optionText : string = "text";
  @Input() optionValue : string = "value";
  @Input() returnObject : boolean = false;
  @Input() options: any[] = [];
  @Input() values: any[] = [];
  @Output() selected = new EventEmitter();
  @Output() remove = new EventEmitter();

  visibleOptions: boolean = false;
  selectedValues: any[] = [];
  selectedOptions: any[] = [];
  selectedIndex: any[] = [];
  textAutocomplete: string = "";

  constructor() { }

  ngOnInit(): void {
    this.updateValue();
  }

  ngOnChanges(changes: SimpleChanges) {
    // this.updateValue();    
  }

  updateValue(): void {

    if (this.values.length) {
      for (const value of this.values) {

        let optionsFilter: any[] = [];

        if (this.returnObject) {
           
          optionsFilter = this.options.filter((option: object) => {
            return JSON.stringify(option) === JSON.stringify(value);
          });
        } else {
          optionsFilter = this.options.filter((option: object) => {
            return this.getOptionValue(option) == value;
          });
        }

        if (optionsFilter.length) {
          this.selectedOptions.push(optionsFilter[0]);
          this.selectedIndex.push(this.selectedOptions.indexOf(optionsFilter[0]));
        }
      }
    }
  }

  getOptionText(option: object): string {
    return this.deepValueSearcher(option, this.optionText);
  }

  getOptionValue(option: object): string {
    return this.returnObject 
        ? JSON.stringify(option) 
        : this.deepValueSearcher(option, this.optionValue);
  }

  select(option: object, index: number): void {
    this.visibleOptions = false;
    
    if (!this.selectedIndex.includes(index)) {
      this.selectedIndex.push(index);
      this.selectedOptions.push(option);

      this.updateSelectedValues();
    }
  }

  updateSelectedValues(): void {
    this.selectedValues = [];

    for (const optionSelected of this.selectedOptions) {
      let value = this.getOptionValue(optionSelected);
      this.selectedValues.push(value);
    }

    this.selected.emit(this.selectedValues);
  }

  removeOption(index: number): void {
    this.selectedOptions.splice(index, 1);
    this.selectedIndex.splice(index, 1);

    this.updateSelectedValues();
    this.remove.emit();
  }

  onKeypress(event: Event): void {

    let target = event.target as HTMLInputElement;
    let value = target.value;

    if (value.length > 1) {
      console.log("filter");
      // const optionsFilter = this.options.filter(function (option: any) {
      //   return (option.color.includes(value));
      // })

      // this.selectedOptions = optionsFilter;
    }
  }

  deepValueSearcher(option: object, path: string): string {
    return path
        .replace(/\[|\]\.?/g, '.')
        .split('.')
        .filter((property: string) => property)
        .reduce((acc: any, val: any) => acc && acc[val], option);
  }
}
