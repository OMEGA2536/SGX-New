import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-my-data',
  templateUrl: './company-my-data.component.html',
  styleUrls: ['./company-my-data.component.css']
})
export class CompanyMyDataComponent implements OnInit {

  url: string | ArrayBuffer | null = '/assets/images/default-image.jpg';
  
  constructor() { }

  ngOnInit(): void {
  }

  onChangeFile(e: Event): void {
    const element = e.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;

    if (fileList) {
      console.log("FileUpload -> files", fileList);

      let reader = new FileReader();
        let file = fileList[0];
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.url = reader.result; 
        };
    }
  }
}
