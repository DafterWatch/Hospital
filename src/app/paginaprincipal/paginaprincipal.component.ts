import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-paginaprincipal',
  templateUrl: './paginaprincipal.component.html',
  styleUrls: ['./paginaprincipal.component.scss']
})
export class PaginaprincipalComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  irLogin(){
    this.router.navigate(['inicioSesion']);
  }
  irRegistro(){
    this.router.navigate(['registro']);
  }
}
