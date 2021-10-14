import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verfichas',
  templateUrl: './verfichas.component.html',
  styleUrls: ['./verfichas.component.scss']
})
export class VerfichasComponent implements OnInit {

  constructor(public router: Router) { }
  cantidadItems = 8;
  paginaActual = 1;
  ngOnInit(): void {
    window.scroll(0,0);
  }
  citasMedicas:CitasMedicas[] = [
    {nombrePaciente:"Juan",fecha:"2021-06-10"},
    {nombrePaciente:"Jose",fecha:"2021-07-10"},
    {nombrePaciente:"Julian",fecha:"2021-08-10"},
    {nombrePaciente:"Pepe",fecha:"2021-08-10"},
    {nombrePaciente:"Roberto",fecha:"2021-08-10"},
    {nombrePaciente:"David",fecha:"2021-08-10"},
    {nombrePaciente:"Oscar",fecha:"2021-08-10"},
    {nombrePaciente:"Obrero",fecha:"2021-08-10"},
    {nombrePaciente:"Lopez",fecha:"2021-08-10"},
    {nombrePaciente:"Manuel",fecha:"2021-08-10"},
    {nombrePaciente:"Martin",fecha:"2021-08-10"},
    {nombrePaciente:"Julian",fecha:"2021-08-10"},
    {nombrePaciente:"Pepe",fecha:"2021-08-10"},
    {nombrePaciente:"Juan",fecha:"2021-08-10"},
    {nombrePaciente:"Miguel",fecha:"2021-08-10"},
    {nombrePaciente:"Luis",fecha:"2021-08-10"},
    {nombrePaciente:"Dylan",fecha:"2021-08-10"},
    {nombrePaciente:"AAA",fecha:"2021-08-10"},
    {nombrePaciente:"BBB",fecha:"2021-08-10"},
    {nombrePaciente:"CCC",fecha:"2021-08-10"},
  ];
  cambioPagina(evento:any){
    this.paginaActual = evento;
    window.scroll(0,0);
  }
  volverLogin(){
    this.router.navigate(['paginaPrincipal']);
  }
}
interface CitasMedicas{
  nombrePaciente:string;
  fecha: string;
}