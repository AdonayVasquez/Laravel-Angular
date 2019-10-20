import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pelicula } from '../interfaces/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  API_ENDPOINT = 'http://127.0.0.1:8000/api';
  constructor( private httpClient:HttpClient) { }

  save(pelicula:Pelicula) {
    const headers = new HttpHeaders( {'Content-Type' : 'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + '/peliculas', pelicula, {headers: headers});
  }
}
