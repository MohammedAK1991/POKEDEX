import { Pokemon } from './../../Pokemon';
import { ApiClientService } from './../api-client.service';
import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css'],
})
export class PokemonDetailComponent implements OnInit {
  @Input()
  pokemon: any;

  constructor(
    private route: ActivatedRoute,
    private apiClientService: ApiClientService
  ) {}

  ngOnInit() {
    this.getPokemonDetail();
  }

  getPokemonDetail() {
    const id = this.route.snapshot.paramMap.get('id');
    this.apiClientService.catchOne(id).subscribe((banana) => {
      this.pokemon = banana;
      console.log(banana);
    });
  }
}
