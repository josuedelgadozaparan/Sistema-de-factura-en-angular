import { MainComponent } from './componentes/main/main.component';;
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
  path: '',
  component: MainComponent,
  children: [
  {
    path: 'inicio',
    component: InicioComponent
  }
  ]
 }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
