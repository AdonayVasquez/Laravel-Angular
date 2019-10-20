import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../interfaces/pelicula';
import { PeliculasService } from '../services/peliculas.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  pelicula: Pelicula = {
    titulo: null,
    descripcion: null,
    genero: null,
    fecha: null,
    duracion: null,
  };

  constructor(private peliculaService: PeliculasService) {
   }

  ngOnInit() {
  }

  guardarPelicula() {
    this.peliculaService.save(this.pelicula).subscribe( (data) => {
      alert('Pelicula guardada');
      console.log(data);
    }, (error) => {
      console.log(error);
      alert('Ocurrio un error');
    } );
  }

}
