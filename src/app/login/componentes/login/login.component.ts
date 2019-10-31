import { ServiceService } from './../../services/service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
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

  json: any;
  user: User;


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
    }
    this.user = new User();
    this.user = this.registerForm.value;
    console.log(this.user);


   /*this.router.navigate(['/dashboard/inicio/inicio']);
    swal ( '¡ Acceso permitido! ' , '¡ Bienvenido a SystemSoftware! ' , 'success' )   ;*/

    this.LoginServices.login(this.registerForm.controls['email'.toString()].value ).subscribe( response => {
    if (response['resultado']=='OK') {
         this.router.navigate(['/dashboard/inicio/inicio']);
         alert(response.valueOf)
         swal ( '¡ Acceso permitido! ' , '¡ Bienvenido a SystemSoftware! ' , 'success' )   ;
      }else{
        alert('No se encuentra registrado')
      }
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
