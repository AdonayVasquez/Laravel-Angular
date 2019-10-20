<?php

namespace App\Http\Controllers;

use App\Pelicula;
use Illuminate\Http\Request;

class PeliculaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $pelicula=Pelicula::get();
        echo json_encode($pelicula);
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $pelicula = new Pelicula();
        $pelicula->titulo=$request->input('titulo');
        $pelicula->descripcion=$request->input('descripcion');
        $pelicula->genero=$request->input('genero');
        $pelicula->fecha=$request->input('fecha');
        $pelicula->duracion=$request->input('duracion');
        $pelicula->save();
        echo json_encode($pelicula);

        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Pelicula  $pelicula_id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $pelicula_id)
    {
        $pelicula = Pelicula::find($pelicula_id);
        $pelicula->titulo=$request->input('titulo');
        $pelicula->descripcion=$request->input('descripcion');
        $pelicula->genero=$request->input('genero');
        $pelicula->fecha=$request->input('fecha');
        $pelicula->duracion=$request->input('duracion');
        $pelicula->save();
        echo json_encode($pelicula);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Pelicula  $pelicula
     * @return \Illuminate\Http\Response
     */
    public function destroy($pelicula_id)
    {
        $pelicula = Pelicula::find($pelicula_id);
        $pelicula->delete();
    }
}
