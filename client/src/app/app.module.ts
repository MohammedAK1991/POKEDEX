import { ApiClientService } from './api-client.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, PokemonDetailComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [ApiClientService],
  bootstrap: [AppComponent],
})
export class AppModule {}
