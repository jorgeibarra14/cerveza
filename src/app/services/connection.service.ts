import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Productos } from '../interfaces/productos';

// export interface Productos {
//   Nombre: string;
//   Precio: number;
//  }



@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  private itemsCollection: AngularFirestoreCollection<Productos>;
  items: Observable<Productos[]>;
  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Productos>('productos');
    this.items = this.itemsCollection.valueChanges();
  }

  // tslint:disable-next-line: typedef
  public addItem(producto: Productos) {
    this.itemsCollection.add(producto);
  }

  // tslint:disable-next-line: typedef
  public getProductos() {
    return this.items;
  }
}
