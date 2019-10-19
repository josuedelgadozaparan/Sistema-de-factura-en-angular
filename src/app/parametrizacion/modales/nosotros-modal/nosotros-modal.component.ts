import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nosotros-modal',
  templateUrl: './nosotros-modal.component.html',
  styleUrls: ['./nosotros-modal.component.css']
})
export class NosotrosModalComponent implements OnInit {

  submitted = false;
  usuarioForm: FormGroup;

  constructor(
    public activeModal: NgbActiveModal
    ) { }

  ngOnInit( ) {
  

  }

   // convenience getter for easy access to form fields
   

   onSubmit() {
   
   

  }





}
