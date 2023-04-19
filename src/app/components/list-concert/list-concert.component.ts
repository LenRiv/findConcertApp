import { Component, OnInit } from '@angular/core';
import { Concert } from 'src/app/interfaces/concert';
import { ConcertsService } from 'src/app/services/concerts.service';

@Component({
  selector: 'app-list-concert',
  templateUrl: './list-concert.component.html',
  styleUrls: ['./list-concert.component.css']
})
export class ListConcertComponent implements OnInit{
//Traer el listado de conciertos, una propiedad para poder pintarlo en html y llamar al servicio para llenar los datos

  concerts: Concert[] = [];

  constructor(private concertsServices: ConcertsService) { }
  
  ngOnInit() {
    //Cuando cargo el componente lleno el array de concieertos
    this.concerts = this.concertsServices.getAll();
  }

  filter($event: string | boolean): void {
    //Con el resultado del filtro llamamos al servicio y llenamos el array con el resultado del filtro 
    if ($event !== 'all') {
      this.concerts = this.concertsServices.getByTickets($event);
    } else {
      this.concerts = this.concertsServices.getAll();
    }
}}
