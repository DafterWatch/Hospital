import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  user = '';
  pass = '';
  iniciarSesion(){
    if(this.user.length > 0 && this.pass.length > 0){
      if(this.user == "medico"){
        this.router.navigate(['verFichas']);
      } else if(this.user == "usuario"){
        this.router.navigate(['sacarFichas']);
      } else {
        alert("Esta cuenta no existe");
      }
    } else {
      alert("Complete los datos");
    }
  }
  volverInicio(){
    this.router.navigate(['paginaPrincipal']);
  }
}
