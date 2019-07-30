import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  URL = "http://localhost/api/";

  constructor(private http: HttpClient) { }

 
  crear(producto) {
    return this.http.post(`${this.URL}crear.php`, JSON.stringify(producto));
  }
  consultar() {
    return this.http.get(`${this.URL}consultar.php`);
  }
  categoria() {
    return this.http.get(`${this.URL}categoria.php`);
  }

  
  producto(id:number) {
    return this.http.get(`${this.URL}producto.php?id=${id}`);
  }

  actualizar(id) {
    return this.http.post(`${this.URL}actualizar.php`, JSON.stringify(id));
  }

  borrar(id){
    return this.http.get(`${this.URL}borrar.php?id=${id}`);
  }

  buscar(termino:string,productos){
    let productosArr = [];
    termino = termino.toLowerCase();
    
    for(let producto of productos){
    let nombre = producto.nombre.toLocaleLowerCase();
    if(nombre.indexOf(termino) >=0){
      productosArr.push(producto);
    }
    }
    return productosArr;
      }
}