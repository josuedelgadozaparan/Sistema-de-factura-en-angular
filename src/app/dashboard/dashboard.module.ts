import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ContenidoComponent } from './componentes/contenido/contenido.component';
import { MainComponent } from './componentes/main/main.component';
import { PieComponent } from './componentes/pie/pie.component';


@NgModule({
  declarations: [ContenidoComponent, MainComponent, PieComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
    
  ]
})
export class DashboardModule { }
