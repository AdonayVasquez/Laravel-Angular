import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../services/peliculas.service';
import { Pelicula } from '../interfaces/pelicula';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  peliculas: Pelicula[];
  constructor(private peliculaservice: PeliculasService) {

    this.getPeliculas();
   }

  ngOnInit() {
  }

  getPeliculas() {
    this.peliculaservice.get().subscribe( (data: Pelicula[]) => {
      this.peliculas = data;
    }, (error) => {
      console.log(error);
    });
  }

  delete(id) {

    if (confirm('¿Seguro que quieres eliminar esta pelicula?')) {

      this.peliculaservice.delete(id).subscribe((data) => {
        alert('Eliminado con exito');
        console.log(data);
        this.getPeliculas();
      }, (error) => {
        console.log(error);
      });
    }

  }

}
