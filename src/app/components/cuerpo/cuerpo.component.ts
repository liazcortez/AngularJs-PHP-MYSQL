
import { Component, OnInit } from '@angular/core';

import { ServiciosService } from '../services/servicios.service';


@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {
  usuarios = null;

  usuario = {
    idUsuario: null,
    nombre: null,
    telefono: null,
    email: null
  }

  constructor(private usuariosServicio: ServiciosService) { }

  ngOnInit() {
  }







  hayRegistros() {
    if(this.usuarios == null) {
      return false;
    } else {
      return true;
    }
  }
}