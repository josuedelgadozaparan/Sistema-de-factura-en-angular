import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../componentes/models/login';



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


  constructor(private formBuilder: FormBuilder,private router: Router) { }

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


    this.router.navigate(['/dashboard']);


   /* this.sLogin.validarLogin(   this.user ).subscribe( response => {
       if (response === true) {
         this.router.navigate(['/dashboard']);

       } else {
         alert('SUCCESS!! :-)\n\n' + JSON.stringify('No auth'));
       }

     });*/
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


