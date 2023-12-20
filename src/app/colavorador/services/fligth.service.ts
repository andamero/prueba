import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Fligt } from '../../models/colaborador.model'

@Injectable({
  providedIn: 'root'
})
export class FligthService {

  private apiUrl = 'http://127.0.0.1:4000/api'; // URL de tu API

  constructor(private http: HttpClient) { }

  guardarFligth(fligt: any) {
    let body = new URLSearchParams();
    Object.keys(fligt).forEach(key => {
      body.set(key, fligt[key]);
    });
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    return this.http.post(`${this.apiUrl}/addvuelo`, body.toString(), options);
  }

  getAll() {
    //get
  }

  buscar(parametros: {[key: string]: any}) {
    let params = new HttpParams();
    Object.keys(parametros).forEach(key => {
      if (parametros[key] != null) {
        params = params.append(key, parametros[key]);
      }
    });

    return this.http.get(`${this.apiUrl}/busquedaporurl`, { params });
  }
}
