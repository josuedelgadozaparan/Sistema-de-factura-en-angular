import { UsuarioService } from './../../services/usuario.service';
import { Usuarios } from './../../models/usuarios';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, Input } from '@angular/core';
import swal from 'sweetalert';


@Component({
  selector: 'app-usuario-modal',
  templateUrl: './usuario-modal.component.html',
  styleUrls: ['./usuario-modal.component.css']
})
export class UsuarioModalComponent implements OnInit {
  submitted = false;
  usuarioForm: FormGroup;


  @Input() public modalData = new Usuarios();

  

  @Input() public usu={
    IdUsuario:null,
    LoginUsuario:null,
    PasswordUsuario:null,
    NombreUsuario:null,
    ApellidoUsuario:null,
    DocumentoUsuario:null,
    EmailUsuario:null

  }

  @Input() public title: string;
  @Input() public usuarios=null;


  constructor(private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,private UsuarioServices: UsuarioService
    ) { }

  ngOnInit( ) {
    //console.log(this.modalData)
    this.usuarioForm = this.formBuilder.group({
    usuario: ['', Validators.required],
    password: ['', Validators.required],
    nombre: ['', Validators.required],
    apellidos: ['', Validators.required],
    direccion: ['', Validators.required],
    documento: ['', Validators.required],
    telefono: ['', Validators.required],
    email: ['', Validators.required],
    TipoDocuemento: ['', Validators.required]


  });


  }

   // convenience getter for easy access to form fields
   get f() { return this.usuarioForm.controls; }

   onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.usuarioForm.invalid) {
      return;
    } else {

      if (this.title === 'Registrar usuario') {
        this.crear();
       } else {
         this.modificacion();
       }


    }
  }


  crear() {
    this.usuarios = new  Usuarios();
    this.usuarios = this.usuarioForm.value;
    this.UsuarioServices.alta(this.usuarios).subscribe(datos => {
      if (datos['resultado']=='OK') {
        this.UsuarioServices.crearUsuario.emit(true);
      //  alert(datos['mensaje']);
        this.activeModal.close();
        swal ( '¡ Registro exitoso! ' , '¡Usuario guardado exitosamente! ' , 'success' )   ;
      }

    });
   }

   modificacion() {
     console.log(this.modalData)
    this.UsuarioServices.modificacion(this.modalData).subscribe(datos => {
      if (datos['resultado']=='OK') {
        //alert(datos['mensaje']);
        this.UsuarioServices.crearUsuario.emit(true);
        this.activeModal.close();
        swal ( '¡ Actualizacion exitosa! ' , '¡El usuario fué actualizado exitosamente! ' , 'success' )   ;
      }
    });
    
  }








}
