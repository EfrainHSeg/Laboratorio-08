import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from '../app/product-list/product-list.component';
import { ProductFormComponent } from '../app/product-form/product-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/productos', pathMatch: 'full' }, // Redirige al componente ProductListComponent por defecto
  { path: 'productos', component: ProductListComponent }, // Ruta para la lista de productos
  { path: 'productos/edit/:id', component: ProductFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
