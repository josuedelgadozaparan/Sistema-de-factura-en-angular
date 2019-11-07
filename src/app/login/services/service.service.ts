import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url='http://localhost/SistemaFacturaBack/'; // disponer url de su servidor que tiene las páginas PHP


  constructor(private http: HttpClient) { }


  login(email:number) {
    return this.http.get(`${this.url}logueo.php?email=${email}`);
  }

  ValidarLogueo(user:String) {
    return this.http.get(`${this.url}ValidarLogueo.php?usuario=${user}`);
  }

}
