import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../services/servicios.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
  
})
export class HomeComponent implements OnInit {

  productos=null;

  producto={
    nombre:null,
    descripcion:null,
    categoria:null

  }
  constructor( private servicio:ServiciosService) { }

  ngOnInit() {
    this.categoria();
  }


  categoria(){
    this.servicio.categoria().subscribe(
      result => this.productos = result
      
    )
    console.log(this.productos);
  }

  crear(){
    this.servicio.crear(this.producto).subscribe(
      datos => {
        if(datos['resultado'] == 'OK') {
          alert(datos['mensaje']);
          
        }
      }
    );
  }
}
