import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../../services/connection.service';

@Component({
  selector: 'app-grid-productos',
  templateUrl: './grid-productos.component.html',
  styleUrls: ['./grid-productos.component.scss']
})
export class GridProductosComponent implements OnInit {
  gridData: any = [];
  constructor(private service: ConnectionService) {
    this.service.getProductos().subscribe((res) => {
      this.gridData = res;
    });
   }
   abrirModal: boolean = false;
  ngOnInit() {
  }
  agregarProducto() {
    this.abrirModal = true;
  }

}
