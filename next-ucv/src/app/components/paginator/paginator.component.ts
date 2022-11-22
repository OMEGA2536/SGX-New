import { Component, Input, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @Input() currentPage: number = 1;
  @Input() totalItems: number = 1;
  @Input() itemsPerPage: number = 1;
  @Input() start: number = -1;
  @Input() end: number = -1;
  @Output() previousPage = new EventEmitter();
  @Output() nextPage = new EventEmitter();

  arrayPagination: any[] = [];
  // page: number = 0;

  constructor() {
    // this.page = this.currentPage;
  }

  ngOnInit(): void {
    // this.updatePagination();
  }

  ngOnChanges(changes: SimpleChanges) {
    // this.updatePagination();   
    // this.page = this.currentPage; 
  }

  toPreviousPage(): void {
    if (this.currentPage === 0) return; 
    
    this.previousPage.emit(this.currentPage - 1);
  }

  toNextPage(): void {
    // if (this.currentPage === this.totalItems) 
      this.nextPage.emit(this.currentPage + 1);
  }
}
