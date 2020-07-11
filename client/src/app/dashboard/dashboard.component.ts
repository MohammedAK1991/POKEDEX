import { Pokemon } from './../../Pokemon';
import { ApiClientService } from './../api-client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  pokemons: any; //
  // pokemons = {
  //   id: 1,
  //   image: 'https://raw.githubusercontent.com/PokeAPI/sprites/pokemon/1.png',
  //   url: 'http://pokeapi.salestock.net/api/v2/pokemon/1/',
  //   name: 'bulbasaur',
  // };

  constructor(private ApiClientService: ApiClientService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.ApiClientService.gottaCatchEmAll().subscribe((pokemons) => {
      console.log(pokemons);
      this.pokemons = pokemons;
    });
  }
}
