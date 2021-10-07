import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  user = '';
  pass = '';
  reppass = '';
  mail = '';
  registrarNuevoUsuario(){
    alert("Se ha registrado");
  }
  volverInicio(){
    this.router.navigate(['paginaPrincipal']);
  }
}
