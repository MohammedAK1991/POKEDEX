import { Pokemon } from './../Pokemon';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiClientService {
  private allPokemonURL = 'http://localhost:5000/pokemon';
  // allPokemons;

  constructor(private http: HttpClient) {}

  gottaCatchEmAll(): Observable<Pokemon[]> {
    //all pokeomns
    return this.http.get<Pokemon[]>(this.allPokemonURL);
  }
  catchOne(pokemonId: string): Observable<Pokemon> {
    // one pokemon
    const url = `${this.allPokemonURL}/${pokemonId}`;
    return this.http.get<Pokemon>(url);
  }
}
