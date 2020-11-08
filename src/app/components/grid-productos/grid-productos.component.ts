import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../../services/connection.service';
import {Productos} from '../../interfaces/productos';

@Component({
  selector: 'app-grid-productos',
  templateUrl: './grid-productos.component.html',
  styleUrls: ['./grid-productos.component.scss']
})
export class GridProductosComponent implements OnInit {
  gridData: any = [];
  itemData: Productos;
  loading: boolean = false;
  constructor(private service: ConnectionService) {
    this.obtenerProductos();
   }
   abrirModal: boolean = false;
  ngOnInit() {
  }
  obtenerProductos() {
    this.loading = true;
    this.service.obtenerProductos().subscribe((res) => {
      this.gridData = res;
      this.loading = false;
    });
  }
  agregarProducto() {
    this.abrirModal = true;
  }
  borrar(data:any) {
    this.service.borrarProducto(data.id).subscribe((res) => this.obtenerProductos() );
  }

  editar(dataItem: Productos) {
    this.itemData = dataItem;
    this.abrirModal = true;
  }
}
