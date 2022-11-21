import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  user: any;
  txtName: string ='';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.user =JSON.parse(localStorage.getItem('currentUser')!);
    this.txtName = this.user.nombres;
  }

 
  toLoginView(){
    localStorage.removeItem('currentUser');
    this.router.navigate(['/authentication/login']);
  }
}
