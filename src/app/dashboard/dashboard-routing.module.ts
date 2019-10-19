import { MainComponent } from './componentes/main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
 {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'inicio',
        loadChildren: '../inicio/inicio.module#InicioModule'
      },
      {
        path: 'parametrizacion',
        loadChildren: '../parametrizacion/parametrizacion.module#ParametrizacionModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
