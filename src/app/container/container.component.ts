import {Component, OnInit, NgZone, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

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
  @Output() cerrarSesion = new EventEmitter();
  constructor(private router: Router,  private ngZone: NgZone) {
   }

  ngOnInit(): void {

  }

  signIn() {

  }

  singOut() {
    this.cerrarSesion.emit();
  }
}
