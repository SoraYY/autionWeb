import { Component, OnInit } from '@angular/core';
import { Product } from 'src/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1,"Angular1",99,3,"Angular 6 detail",["编程语言","硬件设备"]),
      new Product(2,"Angular2",69,4,"Angular 6 detail",["电子设备","图书"]),
      new Product(3,"Angular3",199,3.5,"Angular 6 detail",["编程语言","硬件设备"]),
      new Product(4,"Angular4",169,3,"Angular 6 detail",["图书","图书"]),
      new Product(5,"Angular5",165,4,"Angular 6 detail",["编程语言","硬件设备"]),
      new Product(6,"Angular6",88,4.5,"Angular 6 detail",["电子设备","硬件设备"]),
      new Product(7,"Angular7",89,3,"Angular 6 detail",["编程语言","硬件设备"]),
      new Product(8,"Angular8",188,4,"Angular 6 detail",["图书","硬件设备"]),
    ];
  }

  private products: Array<Product>;

}
