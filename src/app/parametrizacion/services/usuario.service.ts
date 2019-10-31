import { HttpClient } from '@angular/common/http';
import { Injectable,EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url='http://localhost/SistemaFacturaBack/'; // disponer url de su servidor que tiene las páginas PHP

  crearUsuario = new EventEmitter<any>();



  constructor(private http: HttpClient) { }

  recuperarTodos() {
    return this.http.get(`${this.url}recuperartodos.php`);
  }

  alta(usuario) {
    return this.http.post(`${this.url}alta.php`, JSON.stringify(usuario));
  }


  baja(Id:number) {
    return this.http.get(`${this.url}baja.php?codigo=${Id}`);
  }

  modificacion(usuario) {
    return this.http.post(`${this.url}modificacion.php`, JSON.stringify(usuario));
  }

  seleccionar(id:number) {
    return this.http.get(`${this.url}seleccionar.php?id=${id}`);
  }



}
