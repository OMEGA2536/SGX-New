import { Component, OnInit, Input } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  @Input() className: string = 'w-92'

  routeText: any = 'Título no definido'

  constructor(router :Router) {

    router.events.subscribe((event) => {
      if (event instanceof ActivationEnd) {
          if (event.snapshot.data['title']) {
            this.routeText = event.snapshot.data['title'];
          }
      }  
    })
  }

  ngOnInit(): void {
  }
}
