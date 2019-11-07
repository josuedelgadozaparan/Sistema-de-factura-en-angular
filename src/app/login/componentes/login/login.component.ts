import { ServiceService } from './../../services/service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/login';
import { Router } from '@angular/router';
import swal from 'sweetalert';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;


  user: any;


  @Input() public Data = new User();


  constructor(private formBuilder: FormBuilder,private router: Router,private LoginServices: ServiceService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }else{
    this.user = new User();
    this.user = this.registerForm.value;



   /*this.router.navigate(['/dashboard/inicio/inicio']);
    swal ( '¡ Acceso permitido! ' , '¡ Bienvenido a SystemSoftware! ' , 'success' )   ;*/

    this.LoginServices.ValidarLogueo(this.registerForm.controls['email'.toString()].value).subscribe( response2 => {
      console.log(response2);
      this.user =response2;

      if(this.user.LoginUsuario!=null){

        if(this.user.PasswordUsuario==this.registerForm.controls['password'.toString()].value){

          this.router.navigate(['/dashboard/inicio/inicio']);

          swal ( '¡ Acceso permitido! ' , '¡ Bienvenido a SystemSoftware! ' , 'success' )   ;


        }else{
          swal ( '¡ Advertencia! ' , '¡ La contraseña no coincide con el usuario! ' , 'warning' );

        }

      }else{
        swal ( '¡ Acceso denegado! ' , '¡ Usted no registra en la bae de datos! ' , 'error' )   ;
      }

      //alert(this.user.LoginUsuario)
      /*if (response['resultado']=='OK') {


         this.router.navigate(['/dashboard/inicio/inicio']);

         swal ( '¡ Acceso permitido! ' , '¡ Bienvenido a SystemSoftware! ' , 'success' )   ;
      }else{
        alert('No se encuentra registrado')
      }*/
    }
    );
/*
    if (this.registerForm.controls['email'.toString()].value === this.json.email
     && Number(this.registerForm.controls['password'.toString()].value) === this.json.password) {
        console.log(true);
     this.router.navigate(['/Dashboard']);
     } else {
       alert('SUCCESS!! :-)\n\n' + JSON.stringify('No auth'));
     }
*/

  }
}

}
