import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuarios } from './../../models/usuarios';
import { Component, OnInit } from '@angular/core';
import { UsuarioModalComponent } from '../../modales/usuario-modal/usuario-modal.component';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

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
    const modalRef = this.modalService.open(UsuarioModalComponent);
    modalRef.componentInstance.title = 'Registar usuario';
    modalRef.componentInstance.title2 = 'Guardar';

  }



  open2() {
    const modalRef = this.modalService.open(UsuarioModalComponent);
    modalRef.componentInstance.title = 'Actualizar usuario';
    modalRef.componentInstance.title2 = 'Actualizar';


  }

  recuperarTodos() {
    this.UsuarioServices.recuperarTodos().subscribe(result => this.usuarios = result);

  }
}

