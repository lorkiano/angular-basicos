import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  // Con @Input() inidcamos que personajes vienen
  // del componente padre
  @Input('datosPersonajes') personajes: Personaje[] = [];

}
