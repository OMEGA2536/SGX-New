import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor() { }

  @Input() visible: boolean = false;
  @Input() closeIconVisible: boolean = true;
  @Input() size: string = '';
  @Output() close = new EventEmitter();

  ngOnInit(): void {
  }

  getWidth(): string {

    if (this.size === 'xs') return 'w-25'

    if (this.size === 'sm') return 'w-35'

    if (this.size === 'md') return 'w-45'

    if (this.size === 'lg') return 'w-70'

    if (this.size === 'xl') return 'w-90'

    return ''
  }
}
