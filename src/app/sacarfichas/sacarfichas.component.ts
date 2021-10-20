import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sacarfichas',
  templateUrl: './sacarfichas.component.html',
  styleUrls: ['./sacarfichas.component.scss']
})
export class SacarfichasComponent implements OnInit {
  fecha: any;
  constructor(public router: Router) { }
  esp:string = "";
  med:string = "";
  usuario:any="";
  ngOnInit(): void {
    window.scroll(0,0);
    this.usuario = sessionStorage.getItem("usuario");
  }
  registrarCita(){
    console.log(this.fecha,this.esp,this.med);
    alert("La cita se ha registrado");
  }
  fechaCita(event: MatDatepickerInputEvent<Date>) {
    this.fecha = event.value;
    console.log(this.fecha);
  }
  especialidades: Especialidades[] = [
    {value: 'Oftalmologia'},
    {value: 'Endocrinologia'},
    {value: 'Medicina Interna'}
  ];
  medicos: Medicos[] = [
    {value: 'Dr. Hugo'},
    {value: 'Dr. Paco'},
    {value: 'Dr. Luis'}
  ];
  volverInicio(){
    this.router.navigate(['paginaPrincipal']);
  }
  irLogin(){
    this.router.navigate(['inicioSesion']);
  }
}
interface Medicos {
  value: string;
}
interface Especialidades {
  value: string;
}
