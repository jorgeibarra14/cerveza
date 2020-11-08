import {ConnectionService} from './../../services/connection.service';
import {Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import {Productos} from '../../interfaces/productos';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  productos: Productos = {
    nombre: '',
    precio: 0.0,
    id: ''
  };
  @Input() opened;
  @Input() data;
  @Output() closeWindow = new EventEmitter();
  button: string = 'add';
  public dataSaved = false;
  form: FormGroup;
  vendedor: string;
  constructor(private servicio: ConnectionService) {
  }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    let data = JSON.parse(localStorage.getItem('user'));
    this.vendedor = data.email;
    console.log(this.vendedor);

  }

  ngOnChanges(changes: SimpleChanges): void {
    // debugger
      // if(changes.data.currentValue != null) {
        if(this.data != null) {
          this.productos = this.data;
          this.button = 'edit';
        }
      // }
  }

  public close() {
    this.closeWindow.emit();
  }

  public open() {
    this.opened = true;
  }

  public submit(data: any) {
    this.servicio.addItem(this.productos).subscribe((res) => {
      console.log(res);
    });
    this.close();
  }

  edit(productos: Productos) {
    this.servicio.editItem(this.productos).subscribe((res) => console.log(res));
    this.close();
  }
}
