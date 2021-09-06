import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './components/meu-primeiro/meu-primeiro.component';
import { MeuSegundoComponent } from './components/meu-segundo/meu-segundo.component';
import { CursosModule } from './components/cursos/cursos.module'

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuSegundoComponent,
  ],
  imports: [
    BrowserModule,
    CursosModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
