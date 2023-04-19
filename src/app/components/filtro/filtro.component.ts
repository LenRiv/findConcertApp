import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent {

  @Output() ticketsEmit: EventEmitter<string | boolean>

  tickets:any;
  constructor() {
    this.ticketsEmit = new EventEmitter();
  }
  // Este objeto quita carga de if else en el código
  getTickets($event: any): void {
    const tickets: any = {
      'all': 'all',
      'true': true,
      'false': false
    }
    //El resultado de ticket se lo tengo que emitir al padre
    this.ticketsEmit.emit(tickets[$event.target.value])
    
  }
}
