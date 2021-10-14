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
}
