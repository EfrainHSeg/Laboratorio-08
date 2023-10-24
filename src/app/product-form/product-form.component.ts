import { Component } from '@angular/core';
import { Productos } from '../models/productos';
import { ProductosService  } from '../productos.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  nuevoProducto: Productos = new Productos();
  editing: boolean = false;

  constructor(
    private productosService: ProductosService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // Verifica si se está editando un producto
    this.route.params.subscribe(params => {
      if (params['id']) {
        const productId = +params['id'];
        const producto = this.productosService.getProducto(productId);
        if (producto) {
          this.nuevoProducto = { ...producto };
          this.editing = true;
        }
      }
    });
  }

  submitForm() {
    if (this.editing) {
      this.productosService.editarProducto(this.nuevoProducto);
    } else {
      this.productosService.agregarProducto(this.nuevoProducto);
    }
    this.router.navigate(['/productos']);
  }
}