import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-search-cv',
  templateUrl: './company-search-cv.component.html',
  styleUrls: ['./company-search-cv.component.css']
})
export class CompanySearchCvComponent implements OnInit {

  constructor() { }

  items: any[] = [];

  ngOnInit(): void {

    for (let index = 0; index < 10; index++) {

      const item: any = {
        candidate: 'Oscar Eduardo Mendoza Ramos',
        course: 'Administración',
        salary: 6000 + index
      }

      this.items.push(item);
    }
  }

}
