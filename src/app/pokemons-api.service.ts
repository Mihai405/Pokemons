import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPokemonDetailUrl, IPokemonsApiResponse } from './pokemon-models';

@Injectable({
  providedIn: 'root'
})
export class PokemonsApiService {

  private url:string = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=30"
  constructor(private http:HttpClient) { }

  getPokemons(): Observable<IPokemonsApiResponse>{
    return this.http.get<IPokemonsApiResponse>(this.url);
  }

  getPokemonsImage(url: string): Observable<IPokemonDetailUrl> {
    return this.http.get<IPokemonDetailUrl>(url);
  }

}
