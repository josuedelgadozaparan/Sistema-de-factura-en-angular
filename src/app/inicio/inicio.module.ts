import { InicioComponent } from './componentes/inicio/inicio.component';
import { MainComponent } from './componentes/main/main.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';




@NgModule({
  declarations: [MainComponent, InicioComponent],
  imports: [
    CommonModule,
    InicioRoutingModule
  ],

  entryComponents:[

    InicioComponent

  ]
})
export class InicioModule { }
