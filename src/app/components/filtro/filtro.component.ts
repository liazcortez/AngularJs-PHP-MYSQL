import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../services/servicios.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {
  allproductos=null;
  productos = [];
  termino: string;
    constructor(private activatedRoute:ActivatedRoute , private servicio:ServiciosService , private router:Router) { 
      
      
      this.consultar();
      this.activatedRoute.params.subscribe(params => {
        this.productos = this.servicio.buscar(params['busqueda'], this.allproductos);
        this.termino=params['busqueda'];
        console.log(params['busqueda']);
        
      });
   
    }
  ngOnInit() {
  }


  consultar() {
    this.servicio.consultar().subscribe(
      result => {this.allproductos = result
      console.log(result[0]);
      
      }
    );
  }
}


