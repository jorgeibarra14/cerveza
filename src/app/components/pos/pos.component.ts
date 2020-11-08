import { ConnectionService } from './../../services/connection.service';
import {Productos} from '../../interfaces/productos';
import { Component, OnInit } from '@angular/core';
export interface Venta {
  vendedor: string;
  producto: ProductoLista;
  cantidad: number;
}
export interface ProductoLista {
  id: number;
  nombre: string;
  precio: number;
}
@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.css']
})
export class PosComponent implements OnInit {
  vendedor: string;
  productos: any = [];
  constructor(private servicio: ConnectionService) {
    this.servicio.obtenerProductos().subscribe((res) => {
      this.productos = res;
      console.log(this.productos);

    });
   }
   ventas = new Array();
  venta: Venta = {
    producto: { id: 0, precio: 0.0, nombre: '' },
    cantidad: 0,
    vendedor: ''
  };
  total: number = 0;
  paquetes = new Array();
  ngOnInit(): void {
    let data = JSON.parse(localStorage.getItem('user'));
    this.vendedor = data.email;
    console.log(this.vendedor);

  }

  addPaquete(producto: ProductoLista) {

    let hasVenta;

    // if(hasVenta !== null) {
    //   console.log(hasVenta);
    // }
    this.venta = {
      producto: producto,
      cantidad: 1,
      vendedor: this.vendedor
    };
    this.ventas.push( this.venta);
    let contador = 1;
    this.ventas.forEach(v => {
      if (!this.paquetes.find(p => p.producto.id === v.producto.id)) {
                const { producto, cantidad, vendedor } = this.venta;
                this.paquetes.push({ producto, contador, vendedor });
            }
    })
  //   this.ventas.forEach(v => {
  //     if (!this.paquetes.find(p => p.producto.id === v.producto.id)) {
  //         const { producto, cantidad, vendedor } = this.venta;
  //         this.paquetes.push({ producto, contador, vendedor });
  //     } else {
  //       this.paquetes.pop();
  //       this.venta = {
  //         producto: producto,
  //         cantidad: 2,
  //         vendedor: this.vendedor
  //       };
  //       this.paquetes.push(this.venta);
  //     }
  // });


    this.ventas.forEach(element => {
      this.total += element.producto.precio;
    });
  }

}
