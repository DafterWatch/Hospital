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
    {
      nombre:"Juan",
      fecha:"2021-06-10",
      edad:20,
      sexo:"Masculino",
      sintomas:"Tos, Gripe y resfrio grave",
      diagnostico:"Enfermo por resfrio, posible covid",
      doctor:"Carioca",
      nregistro:1
    },
    {
      nombre:"Paco",
      fecha:"2021-18-10",
      edad:20,
      sexo:"Masculino",
      sintomas:"Tos, Gripe y resfrio grave",
      diagnostico:"Enfermo por resfrio, posible covid",
      doctor:"Carioca",
      nregistro:2
    },
    {
      nombre:"Luis",
      fecha:"2021-19-10",
      edad:20,
      sexo:"Masculino",
      sintomas:"Tos, Gripe y resfrio grave",
      diagnostico:"Enfermo por resfrio, posible covid",
      doctor:"Carioca",
      nregistro:3
    },
  ];
  cambioPagina(evento:any){
    this.paginaActual = evento;
    window.scroll(0,0);
  }
  irRegistroMedico(nombre:string, fecha:string, edad:number,sexo:string, sintomas:string, diagnostico: string, doctor:string, nregistro:number){
    this.router.navigate(['registroMedico']);
    sessionStorage.setItem('nombre', nombre);
    sessionStorage.setItem('fecha', fecha);
    sessionStorage.setItem('edad', edad.toString());
    sessionStorage.setItem('sexo', sexo);
    sessionStorage.setItem('sintomas', sintomas);
    sessionStorage.setItem('diagnostico', diagnostico);
    sessionStorage.setItem('doctor', doctor);
    sessionStorage.setItem('nregistro', nregistro.toString());
  }
  volverInicio(){
    this.router.navigate(['paginaPrincipal']);
  }
  irLogin(){
    this.router.navigate(['inicioSesion']);
  }
}
interface CitasMedicas{
  nombre:string;
  fecha: string;
  edad: number;
  sexo: string;
  sintomas: string;
  diagnostico: string;
  doctor: string;
  nregistro: number;
}