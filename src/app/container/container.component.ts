import { Component, OnInit, NgZone  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  name = 'Angular';
  events: string[] = [];
  opened: boolean;
  ruta: string;
  constructor(private router: Router,  private ngZone: NgZone) {
   }

  ngOnInit(): void {

  }

  signIn() {

  }
}
