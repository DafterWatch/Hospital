import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verfichas',
  templateUrl: './verfichas.component.html',
  styleUrls: ['./verfichas.component.scss']
})
export class VerfichasComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  citasMedicas:CitasMedicas[] = [
    {nombrePaciente:"Juan",fecha:"2021-06-10"},
    {nombrePaciente:"Jose",fecha:"2021-07-10"},
    {nombrePaciente:"Julian",fecha:"2021-08-10"},
  ];
  volverLogin(){
    this.router.navigate(['inicioSesion']);
  }
}
interface CitasMedicas{
  nombrePaciente:string;
  fecha: string;
}