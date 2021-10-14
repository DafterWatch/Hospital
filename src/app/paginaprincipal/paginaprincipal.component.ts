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
  user = '';
  pass = '';
  reppass = '';
  mail = '';
  registrarNuevoUsuario(){    
    if(this.user.length>0 && this.pass.length>0 && this.reppass.length>0 && this.mail.length>0){
      if(this.pass == this.reppass){  
        sessionStorage.setItem('correo', this.mail);
        sessionStorage.setItem('contrasena', this.pass);
        this.user = "";
        this.pass = "";
        this.reppass = "";
        this.mail = "";
        alert("Se ha registrado un nuevo usuario");
      } else {
        alert("Las contraseñas no coinciden");
      }
    } else {
      alert("Porfavor complete los campos vacios");
    }
  }
  /*mail = '';
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
  }*/
}
