import { ServiceService } from './services/service.service';

import { LoginComponent } from './componentes/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';

import { MainComponent } from './componentes/main/main.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent, MainComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoginRoutingModule
  ],
  providers: [
    ServiceService

  ]
})
export class LoginModule { }
