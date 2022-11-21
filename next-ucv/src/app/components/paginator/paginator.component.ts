import { Component, Input, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @Input() totalPages: number = 1;
  @Input() currentPage: number = 1;
  @Input() limitPages: number = 1;
  @Input() totalItems: number = 1;
  @Input() partialItems: number = 1;
  @Output() clickPage = new EventEmitter();
  @Output() clickPreviousPage = new EventEmitter();

  numbersPerPage: object[] = [
    {
      text: '10',
      value: 10
    },
    {
      text: '15',
      value: 15
    }
  ];

  arrayPagination: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.updatePagination();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.updatePagination();    
  }

  updatePagination(): void {

    let initialPage = this.currentPage;
    let arrayLimit = this.limitPages;
    let hasEllipses = true

    if (this.limitPages > this.totalPages) {
      arrayLimit = this.totalPages;
    }

    if ((this.totalPages - this.currentPage) < this.limitPages) {
      hasEllipses = false
    }
    
    if (this.limitPages >= this.totalPages) 
    {
      for (let index = 0; index < arrayLimit; index++) 
      {
        this.arrayPagination[index] = index + 1;
      }
      return;
    }

    if (hasEllipses)
    {
      let positionCenterPage = Math.round(arrayLimit / 2);
      let lastPages = 0;
    
      for (let index = 0; index < arrayLimit; index++) 
      {
        if (index < positionCenterPage)   this.arrayPagination[index] = initialPage;
        if (index === positionCenterPage) this.arrayPagination[index] = '...';
        if (index > positionCenterPage)   lastPages++;
        
        initialPage++;
      }

      for (let index = lastPages; index > 0; index--) 
      {
        positionCenterPage++;
        this.arrayPagination[positionCenterPage] = (this.totalPages - index) + 1;
      }

      return;
    }

    initialPage = this.totalPages - arrayLimit + 1;

    for (let index = 0; index < arrayLimit; index++) 
    {
      this.arrayPagination[index] = initialPage;
      initialPage++;
    }
  }

  toPage(page: any): void {
    if (page === '...') return;
    
    this.clickPage.emit(page);
  }

  toPreviousPage(): void {
    if (this.currentPage !== 1) this.clickPreviousPage.emit(this.currentPage - 1);
  }

}
