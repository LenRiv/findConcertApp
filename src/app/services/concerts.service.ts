import { Injectable } from '@angular/core';
import { CONCERTS } from '../db/concerts.db';
import { Concert } from '../interfaces/concert';

@Injectable({
  providedIn: 'root'
})
export class ConcertsService {


  private arrConcerts: Concert[] = CONCERTS

  constructor() { }

  getAll(): Concert[]{
    return this.arrConcerts;
  }

  getById(pId: number): Concert | undefined {
    return this.arrConcerts.find(concert => concert.id === pId)
  }

  getByTickets(pTickets: Boolean | string): Concert[] {
     return this.arrConcerts.filter(concert => concert.tickets === pTickets)
  }
}
