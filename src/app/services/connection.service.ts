import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Venta } from '../components/pos/pos.component';
import { Productos } from '../interfaces/productos';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
// export interface Productos {
//   Nombre: string;
//   Precio: number;
//  }



@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  // private itemsCollection: AngularFirestoreCollection<Productos>;
  // private ventasCollection: AngularFirestoreCollection<Venta>;
  // private itemDoc: AngularFirestoreDocument<Productos>;
  // items: Observable<any[]>;
  // ventas: Observable<any[]>;
  constructor(private afs: AngularFirestore, private http: HttpClient) {
  }
  //   this.itemsCollection = afs.collection<Productos>('productos');
  //   this.ventasCollection = afs.collection<Venta>('ventas');

  //   this.items = this.itemsCollection.snapshotChanges().pipe(
  //     map(producto => producto.map(a => {
  //       const data = a.payload.doc.data() as Productos;
  //       const id = a.payload.doc.id;
  //       return { id, ...data};
  //     }))
  //   );

  //   this.ventas = this.ventasCollection.snapshotChanges().pipe(
  //     map(venta => venta.map(a => {
  //       const data = a.payload.doc.data() as Venta;
  //       const id = a.payload.doc.id;
  //       return { id, ...data};
  //     }))
  //   );
  API: string = environment.api + '/productos/';
  // tslint:disable-next-line: typedef
  public addItem(producto: Productos) {
    // this.itemsCollection.add(producto);
      let url = this.API;
      return this.http.post(url, {nombre: producto.nombre, precio: producto.precio});
  }
  public addVenta(venta: Venta){
    // this.ventasCollection.add(venta);
  }

  public getVenta() {
    // return this.ventas;
  }
  // tslint:disable-next-line: typedef
  public getProductos() {
    // return this.items;
  }

  public borrarProducto(id: any) {
    // this.itemDoc = this.afs.doc<Productos>('productos/' + id);
    let url = this.API + id;
    return this.http.delete(url);
  }

  public editItem(productos: Productos) {
      let url = this.API + productos.id;
      return this.http.put(url, {nombre: productos.nombre, precio: productos.precio});
    // this.itemDoc = this.afs.doc<Productos>('productos/' + productos.id);
    // this.itemDoc.update(productos);
  }

  public obtenerProductos() {
    return this.http.get(this.API);
  }
}
