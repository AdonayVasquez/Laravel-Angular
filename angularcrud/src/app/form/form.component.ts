import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../interfaces/pelicula';
import { PeliculasService } from '../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

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
  id: any;
  editar: boolean = false;
  peliculas: Pelicula[];

  constructor(private peliculaService: PeliculasService, private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      this.editar = true;
      this.peliculaService.get().subscribe( (data: Pelicula[]) => {
        this.peliculas = data;
        this.pelicula = this.peliculas.find( (m) => { return m.id == this.id });
      }, (error) => {
        console.log(error);
      });
    }
   }

  ngOnInit() {
  }

  guardarPelicula() {

    if (this.editar) {
      this.peliculaService.update(this.pelicula).subscribe( (data) => {
        alert('Pelicula actualizada');
        console.log(data);
      }, (error) => {
        console.log(error);
        alert('Ocurrio un error');
      } );

    } else {
      this.peliculaService.save(this.pelicula).subscribe( (data) => {
        alert('Pelicula guardada con exito');
        console.log(data);
      }, (error) => {
        console.log(error);
        alert('Ocurrio un error');
      } );
    }

    this.pelicula.titulo = '';
    this.pelicula.descripcion = '';
    this.pelicula.duracion = '';
    this.pelicula.genero = '';
    this.pelicula.fecha = null;
  }

}
