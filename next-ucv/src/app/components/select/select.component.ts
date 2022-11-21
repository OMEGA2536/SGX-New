import { Component, Input, Output, OnInit, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  @Input() placeholder : string = "";
  @Input() optionText : string = "text";
  @Input() optionValue : string = "value";
  @Input() returnObject : boolean = false;
  @Input() options: any[] = [
    {
      text: 'Option 1',
      value: 1
    },
    {
      text: 'Option 2',
      value: 2
    }
  ];
  @Input() value: any = null;
  @Output() selected = new EventEmitter();

  visibleOptions: boolean = false;
  text: string = "";

  constructor() { }

  ngOnInit(): void {
    this.updateValue();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.updateValue();    
  }

  updateValue(): void {
    if (this.placeholder) {
      this.text = this.placeholder;
    }

    if (this.value) {
      const options: any[] = this.options.filter((option: object) => {
          return this.getOptionValue(option) == this.value;
      });

      this.text = this.getOptionText(options[0]) || '';
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

  select(option: object): void {
    this.visibleOptions = false;
    this.text = this.getOptionText(option);

    this.selected.emit(this.getOptionValue(option));
  }

  deepValueSearcher(option: object, path: string): string {
    return path
        .replace(/\[|\]\.?/g, '.')
        .split('.')
        .filter((property: string) => property)
        .reduce((acc: any, val: any) => acc && acc[val], option);
  }
}
