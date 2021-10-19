import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginaprincipalComponent } from './paginaprincipal/paginaprincipal.component';
import { LoginComponent } from './login/login.component';
import { SacarfichasComponent } from './sacarfichas/sacarfichas.component';
import { VerfichasComponent } from './verfichas/verfichas.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import {NgxPaginationModule} from 'ngx-pagination';
import { RegistroComponent } from './registro/registro.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RegistromedicoComponent } from './registromedico/registromedico.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaprincipalComponent,
    LoginComponent,
    SacarfichasComponent,
    VerfichasComponent, 
    RegistroComponent, RegistromedicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    MatListModule,
    NgxPaginationModule,
    MatTabsModule,
    MatToolbarModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
