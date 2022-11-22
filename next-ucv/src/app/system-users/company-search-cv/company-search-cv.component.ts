import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-search-cv',
  templateUrl: './company-search-cv.component.html',
  styleUrls: ['./company-search-cv.component.css']
})
export class CompanySearchCvComponent implements OnInit {

  constructor() { }

  items: any[] = [];
  visibleItems: any[] = [];
  itemsPerPage: number = 10;
  currentPage: number = 1;

  startPosition: number = 0;
  endPosition: number = 0;

  ngOnInit(): void {

    for (let index = 0; index < 45; index++) {

      const item: any = {
        candidate: 'Oscar Eduardo Mendoza Ramos',
        course: 'Administración',
        salary: 6000 + index + 1
      }

      this.items.push(item);
    }

    this.render();
  }

  render(): void {
    this.visibleItems = [];

    this.startPosition = this.itemsPerPage * (this.currentPage - 1);
    this.endPosition = this.itemsPerPage * this.currentPage;

    if (this.endPosition >= this.items.length) {
      this.endPosition = this.items.length;
    }

    for (let index = this.startPosition; index < this.endPosition; index++) {
      
      this.visibleItems.push(this.items[index]);
    }
  }

  onChangePage(page: number): void {

    if (page === 0) return;

    this.currentPage = page;
    this.render();
  }
}
