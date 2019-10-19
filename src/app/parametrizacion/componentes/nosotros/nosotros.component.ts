import { Component, OnInit } from '@angular/core';
import { NosotrosModalComponent } from '../../modales/nosotros-modal/nosotros-modal.component';
import { UsuarioService } from '../../services/usuario.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuarios } from './../../models/usuarios';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

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

   

 }

  open() {
    const modalRef = this.modalService.open(NosotrosModalComponent);
    modalRef.componentInstance.title = 'Descripcion';
    modalRef.componentInstance.title2 = 'Guardar';

  }



  
}

