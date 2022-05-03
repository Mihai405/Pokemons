import { Component, Input, OnInit } from '@angular/core';
import { IPokemonModel } from '../pokemon-models';
import { PokemonsApiService } from '../pokemons-api.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  @Input() pokemon: IPokemonModel = {
    name:'',
    url:'',
  }

  constructor(private pokemonService:PokemonsApiService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemonsImage(this.pokemon.url)
      .subscribe(data => this.pokemon.image=data.sprites.front_default)
  }

}
