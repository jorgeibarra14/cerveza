import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() opened;
  @Output() closeWindow = new EventEmitter();
    public dataSaved = false;

    public close() {
      this.closeWindow.emit();
    }

    public open() {
      this.opened = true;
    }

    public submit() {
        this.dataSaved = true;
        this.close();
    }
}
