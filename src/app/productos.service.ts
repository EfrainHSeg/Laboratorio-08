import { Injectable } from '@angular/core';
import { Productos } from './models/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private productos: Productos[] = [
    { id: 1, codigo: 'ABC123', descripcion:'coronita', precio: 0.50},
    { id: 2, codigo: 'DEF456', descripcion:'incakola', precio: 2.50},
    { id: 3, codigo: 'GHI789', descripcion:'cocacola', precio: 2.50},
    { id: 4, codigo: 'JKL012', descripcion:'cañonzo', precio: 0.70},
    { id: 5, codigo: 'MNO345', descripcion:'agua cielo', precio: 1.20}
  ];

 
  constructor() { }

  getProductos(): Productos[] {
    return this.productos;
  }

  agregarProducto(producto: Productos) {
    // Asignar un nuevo ID al producto
    producto.id = this.productos.length + 1;
    this.productos.push(producto);
  }

  editarProducto(producto: Productos) {
    const index = this.productos.findIndex(p => p.id === producto.id);
    if (index !== -1) {
      this.productos[index] = producto;
    }
  }

  deleteProducto(id: number) {
    const index = this.productos.findIndex(p => p.id === id);
    if (index !== -1) {
      this.productos.splice(index, 1);
    }
  }

  getProducto(id: number): Productos | undefined {
    return this.productos.find(p => p.id === id);
  }
}
