import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto-modal',
  templateUrl: './producto-modal.component.html',
  styleUrls: ['./producto-modal.component.css']
})
export class ProductoModalComponent implements OnInit {

  submitted = false;
  usuarioForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal
    ) { }

  ngOnInit( ) {
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
    }
   

  }





}

