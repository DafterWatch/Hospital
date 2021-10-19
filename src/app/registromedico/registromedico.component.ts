import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registromedico',
  templateUrl: './registromedico.component.html',
  styleUrls: ['./registromedico.component.scss']
})
export class RegistromedicoComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
    window.scroll(0,0);
    this.nombre = sessionStorage.getItem('nombre');
    this.fechaIngreso=sessionStorage.getItem('fecha');
    this.edad=sessionStorage.getItem('edad');
    this.sexo=sessionStorage.getItem('sexo');
    this.sintomas=sessionStorage.getItem('sintomas');
    this.diagnosticoMedico=sessionStorage.getItem('diagnostico');
    this.doctor=sessionStorage.getItem('doctor');
    this.nRegistro=sessionStorage.getItem('nregistro');
  }
  volverInicio(){
    this.router.navigate(['paginaPrincipal']);
  }
  irLogin(){
    this.router.navigate(['inicioSesion']);
  }
  volverCitasMedicas(){
    this.router.navigate(['verFichas']);
  }
  nombre:any = "";
  sexo:any = "";
  edad:any = "";
  fechaIngreso:any = "";
  diagnosticoMedico:any = "";
  sintomas:any = "";
  doctor:any = "";
  nRegistro:any = "";
}
