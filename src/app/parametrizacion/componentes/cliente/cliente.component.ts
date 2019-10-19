import { Component, OnInit } from '@angular/core';
import { ClienteModalComponent } from '../../modales/cliente-modal/cliente-modal.component';
import { UsuarioService } from '../../services/usuario.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuarios } from './../../models/usuarios';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  title: string;
  UsuariosArray: Usuarios[];
  columns: any[];

  usuarios=null;

  usu={
    IdUsuario:null,
    LoginUsuario:null,
    PasswordUsuario:null,
    NombreUsuario:null,
    ApellidoUsuario:null,
    DocumentoUsuario:null,
    EmailUsuario:null

  }

  constructor(private modalService: NgbModal,private UsuarioServices: UsuarioService ) { }

  ngOnInit() {

    this.recuperarTodos();

 }

  open() {
    const modalRef = this.modalService.open(ClienteModalComponent);
    modalRef.componentInstance.title = 'Registar cliente';
    modalRef.componentInstance.title2 = 'Guardar';

  }



  open2() {
    const modalRef = this.modalService.open(ClienteModalComponent);
    modalRef.componentInstance.title = 'Actualizar cliente';
    modalRef.componentInstance.title2 = 'Actualizar';


  }

  recuperarTodos() {
    this.UsuarioServices.recuperarTodos().subscribe(result => this.usuarios = result);

  }
}