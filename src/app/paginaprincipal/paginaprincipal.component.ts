import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-paginaprincipal',
  templateUrl: './paginaprincipal.component.html',
  styleUrls: ['./paginaprincipal.component.scss']
})
export class PaginaprincipalComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
    window.scroll(0,0);
    this.correoSession = sessionStorage.getItem('correo');
    this.contraSession = sessionStorage.getItem('contrasena');
  }
  irLogin(){
    this.router.navigate(['inicioSesion']);
  }
  irRegistro(){
    this.router.navigate(['registro']);
  }
  correoSession:any="";
  contraSession:any="";
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['ATRAS','ADELANTE'],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }
  mail = '';
  pass = '';
  iniciarSesion(){
    if(this.mail.length > 0 && this.pass.length > 0){
      if(this.mail == "medico"){
        this.router.navigate(['verFichas']);
      } else if(this.mail == this.correoSession && this.pass == this.contraSession){
        this.router.navigate(['sacarFichas']);
      } else {
        alert("Esta cuenta no existe");
      }
    } else {
      alert("Complete los datos");
    }
  }
}
