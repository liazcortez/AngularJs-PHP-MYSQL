import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ServiciosService } from '../services/servicios.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  productoid=null;

  productos=null;
  
  id=null;
  producto={
    id:null,
    nombre:null,
    descripcion:null,
    categoria:null

  }

  constructor( private activatedRoute:ActivatedRoute ,private servicio:ServiciosService) {
    this.activatedRoute.params.subscribe(params => this.id=params['id']);
    
   }

  ngOnInit() {
    this.productobuscar();
    
  }

  productobuscar(){
    this.servicio.producto(this.id).subscribe(
      result =>{
        this.producto.id=result.id;
        this.producto.nombre=result.nombre;
        this.producto.descripcion=result.descripcion;
        this.producto.categoria=result.categoria;
        
      }
      
    );

   
  }

  categoria(){
    this.servicio.categoria().subscribe(
      result => this.productos = result
      
    )
    console.log(this.productos);
  }

  actualizar(){
    this.servicio.actualizar(this.producto).subscribe(
      datos => {
        if(datos['resultado'] == 'OK') {
          alert(datos['mensaje']);
          
        }
      }
    );
  }
  
}
