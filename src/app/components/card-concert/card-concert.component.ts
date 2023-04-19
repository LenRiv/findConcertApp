import { Component, Input } from '@angular/core';
import { Concert } from 'src/app/interfaces/concert';

@Component({
  selector: 'app-card-concert',
  templateUrl: './card-concert.component.html',
  styleUrls: ['./card-concert.component.css']
})
export class CardConcertComponent {

  @Input() miConcert!: Concert;

}
