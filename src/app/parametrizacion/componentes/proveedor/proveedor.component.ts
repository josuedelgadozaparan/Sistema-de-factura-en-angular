import { Component, OnInit } from '@angular/core';
import { ProveedorModalComponent } from '../../modales/proveedor-modal/proveedor-modal.component';
import { UsuarioService } from '../../services/usuario.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuarios } from './../../models/usuarios';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit {

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
    const modalRef = this.modalService.open(ProveedorModalComponent);
    modalRef.componentInstance.title = 'Registar proveedor';
    modalRef.componentInstance.title2 = 'Guardar';

  }



  open2() {
    const modalRef = this.modalService.open(ProveedorModalComponent);
    modalRef.componentInstance.title = 'Actualizar proveedor';
    modalRef.componentInstance.title2 = 'Actualizar';


  }

  recuperarTodos() {
    this.UsuarioServices.recuperarTodos().subscribe(result => this.usuarios = result);

  }
}
