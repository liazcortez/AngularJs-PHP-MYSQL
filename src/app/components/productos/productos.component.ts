import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../services/servicios.service';
import {Router } from '@angular/router';
  
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos=null;
  constructor( private servicio:ServiciosService, private router:Router) { }

  ngOnInit() {
    this.consultar();
  }


  consultar() {
    this.servicio.consultar().subscribe(
      result => this.productos = result
    );
    console.log(this.productos);
    
  } 

  hayRegistros() {
    if(this.productos == null) {
      return false;
    } else {
      return true;
    }
  }

  verproducto(inx:number){

    this.router.navigate(['/producto', inx]);
    }
    borrar(id){
      this.servicio.borrar(id).subscribe(
        datos => {
          if(datos['resultado'] == 'OK') {
            alert(datos['mensaje']);
            this.consultar();
          }
        }
      );
    }
}
