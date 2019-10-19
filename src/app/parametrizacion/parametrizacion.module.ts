import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ParametrizacionRoutingModule } from './parametrizacion-routing.module';
import { MainComponent } from './componentes/main/main.component';
import { UsuarioModalComponent } from './modales/usuario-modal/usuario-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';
import { ClienteComponent } from './componentes/cliente/cliente.component';
import { ClienteModalComponent } from './modales/cliente-modal/cliente-modal.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { ProveedorComponent } from './componentes/proveedor/proveedor.component';
import { FacturaComponent } from './componentes/factura/factura.component';
import { ReporteComponent } from './componentes/reporte/reporte.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { ProductoModalComponent } from './modales/producto-modal/producto-modal.component';
import { ProveedorModalComponent } from './modales/proveedor-modal/proveedor-modal.component';
import { FacturaModalComponent } from './modales/factura-modal/factura-modal.component';
import { ReporteModalComponent } from './modales/reporte-modal/reporte-modal.component';
import { NosotrosModalComponent } from './modales/nosotros-modal/nosotros-modal.component';


 



@NgModule({
  declarations: [MainComponent, 
    UsuariosComponent,
    UsuarioModalComponent,
    ClienteComponent, 
    ClienteModalComponent, 
    ProductoComponent, 
    ProveedorComponent, 
    FacturaComponent, 
    ReporteComponent, 
    NosotrosComponent, 
    ProductoModalComponent, 
    ProveedorModalComponent, 
    FacturaModalComponent, 
    ReporteModalComponent, 
    NosotrosModalComponent],
     imports:[
    CommonModule,
    NgxPaginationModule,
    NgbModule,
    ReactiveFormsModule,  
    ParametrizacionRoutingModule
  ],

  entryComponents:[

    UsuarioModalComponent,
    ClienteModalComponent,
    ProductoModalComponent,
    ProveedorModalComponent,
    FacturaModalComponent,
    ReporteModalComponent,
    NosotrosModalComponent
    

  ]
})
export class ParametrizacionModule { }
