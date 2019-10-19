import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { ClienteComponent } from './componentes/cliente/cliente.component';
import { MainComponent } from './componentes/main/main.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { ProveedorComponent } from './componentes/proveedor/proveedor.component';
import { FacturaComponent } from './componentes/factura/factura.component';
import { ReporteComponent } from './componentes/reporte/reporte.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
    {
      path: 'usuarios',
      component: UsuariosComponent
    }
    ]
  },{
    path: '',
    component: MainComponent,
    children: [
    {
      path: 'cliente',
      component: ClienteComponent
    }
   ]
  },{
    path: '',
    component: MainComponent,
    children: [
    {
      path: 'producto',
      component: ProductoComponent
    }
   ]
  },{
    path: '',
    component: MainComponent,
    children: [
    {
      path: 'proveedor',
      component: ProveedorComponent
    }
   ]
  },{
    path: '',
    component: MainComponent,
    children: [
    {
      path: 'factura',
      component: FacturaComponent
    }
   ]
  },{
    path: '',
    component: MainComponent,
    children: [
    {
      path: 'reporte',
      component: ReporteComponent
    }
   ]
  },{
    path: '',
    component: MainComponent,
    children: [
    {
      path: 'nosotros',
      component: NosotrosComponent
    }
   ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrizacionRoutingModule { }
