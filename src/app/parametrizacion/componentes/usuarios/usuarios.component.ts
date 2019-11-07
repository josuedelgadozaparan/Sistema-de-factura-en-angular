import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuarios } from './../../models/usuarios';
import { Component, OnInit } from '@angular/core';
import { UsuarioModalComponent } from '../../modales/usuario-modal/usuario-modal.component';
import { UsuarioService } from '../../services/usuario.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
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

    this.UsuarioServices.crearUsuario.subscribe( response2 => {
      if (response2 === true) {
        this.recuperarTodos();
      }
    });
 }

  open() {
    const modalRef = this.modalService.open(UsuarioModalComponent);
    modalRef.componentInstance.title = 'Registrar usuario';
    modalRef.componentInstance.title2 = 'Guardar';
    this.recuperarTodos();

  }



  open2(id) {
    const modalRef = this.modalService.open(UsuarioModalComponent);
    //console.log(this.UsuarioServices.seleccionar(id).subscribe(result =>  modalRef.componentInstance.modalData = result[0]))
    modalRef.componentInstance.title = 'Actualizar usuario';
    modalRef.componentInstance.title2 = 'Actualizar';
    this.UsuarioServices.seleccionar(id).subscribe( response4 => {
      modalRef.componentInstance.modalData = response4;
      console.log(response4);
    });

  }

  recuperarTodos() {
    this.UsuarioServices.recuperarTodos().subscribe(result => this.usuarios = result);


  }

  baja(codigo) {
    this.UsuarioServices.baja(codigo).subscribe(datos => {
      if (datos['resultado']=='OK') {
        //alert(datos['mensaje']);
        swal ( '¡ Borrado exitoso! ' , '¡Usuario fué eliminado exitosamente! ' , 'success' )   ;
        this.recuperarTodos();
      }
    });
  }





}
