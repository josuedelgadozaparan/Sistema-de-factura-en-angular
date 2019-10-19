import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url='http://localhost/SistemaFacturaBack/'; // disponer url de su servidor que tiene las páginas PHP


  constructor(private http: HttpClient) { }

  recuperarTodos() {
    return this.http.get(`${this.url}recuperartodos.php`);
  }

  alta(usuario) {
    return this.http.post(`${this.url}alta.php`, JSON.stringify(usuario));
  }
}
