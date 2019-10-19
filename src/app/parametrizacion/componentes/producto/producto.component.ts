import { Component, OnInit } from '@angular/core';
import { ProductoModalComponent } from '../../modales/producto-modal/producto-modal.component';
import { UsuarioService } from '../../services/usuario.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuarios } from './../../models/usuarios';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

 
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
    const modalRef = this.modalService.open(ProductoModalComponent);
    modalRef.componentInstance.title = 'Registar producto';
    modalRef.componentInstance.title2 = 'Guardar';

  }



  open2() {
    const modalRef = this.modalService.open(ProductoModalComponent);
    modalRef.componentInstance.title = 'Actualizar producto';
    modalRef.componentInstance.title2 = 'Actualizar';


  }

  recuperarTodos() {
    this.UsuarioServices.recuperarTodos().subscribe(result => this.usuarios = result);

  }
}
