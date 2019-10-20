import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../services/peliculas.service';
import { HttpClient } from '@angular/common/http';
import { Pelicula } from '../interfaces/pelicula';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  API_ENDPOINT = 'http://127.0.0.1:8000/api';
  peliculas: Pelicula[];
  constructor(private peliculaservice: PeliculasService, private httpClient: HttpClient) {
    httpClient.get(this.API_ENDPOINT + '/peliculas').subscribe( (data: Pelicula[]) => {
      this.peliculas = data;
    });
   }

  ngOnInit() {
  }

}
