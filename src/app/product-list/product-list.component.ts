import { Component, OnInit } from '@angular/core';
import { Productos } from '../models/productos';
import { ProductosService } from '../productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productos: Productos[] = [];

  constructor(
    private productosService: ProductosService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getProductos();
  }

  getProductos() {
    this.productos = this.productosService.getProductos();
  }

  deleteProducto(producto: Productos) {
    this.productosService.deleteProducto(producto.id);
    this.getProductos();
  }
}
