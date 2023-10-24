import { Component } from '@angular/core';
import {Productos } from './models/productos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productosArray : Productos[] = [
    {id: 1 ,codigo:"12", descripcion: "buena", precio:100},
    {id: 2 ,codigo:"13", descripcion: "mala", precio:200},
    {id: 3 ,codigo:"14", descripcion: "regular", precio:300},
    {id: 4 ,codigo:"15", descripcion: "caro", precio:400},
  ];


  selectedProductos : Productos = new Productos();

  openForEdit(producto:  Productos){
    this.selectedProductos = producto;

  };

  addOrEdit(){
    if(this.selectedProductos.id === 0){
      this.selectedProductos.id = this.productosArray.length +1;
      this.productosArray.push(this.selectedProductos);

    }
   

    this. selectedProductos = new Productos();

  }

  delete(){
    if(confirm("Estas seguro de eliminar")){
      this.productosArray = this.productosArray.filter(p => p !== this.selectedProductos)
      this.selectedProductos = new Productos();
    }

  }
  
}
