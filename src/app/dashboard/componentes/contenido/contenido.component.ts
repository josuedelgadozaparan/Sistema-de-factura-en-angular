import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  salir(){
    swal({
      title: "Está seguro que desea cerrar la sesión?",
      text: "Al cerrar se reiniciará SystemFacture!",
      icon: "warning",
      dangerMode: true,

    })
      .then((willDelete) => {
        if (willDelete) {
          swal ( '¡Sesión cerrada!' ,'Gracias por preferir SystemFacture, vuelva pronto!', 'success' );
          this.router.navigate(['/login/auth']);
        } else {
          swal ( '¡Proceso cancelado!' ,'Estas activo!', 'error' );
        }
      });
  }

}
