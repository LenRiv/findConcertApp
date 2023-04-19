import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Concert } from 'src/app/interfaces/concert';
import { ConcertsService } from 'src/app/services/concerts.service';

@Component({
  selector: 'app-concert-view',
  templateUrl: './concert-view.component.html',
  styleUrls: ['./concert-view.component.css']
})
export class ConcertViewComponent {

  concert!: Concert

  constructor(private concertServices: ConcertsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }
  
  ngOnInit() {
    //Capturo el id de la ruta para hacer la consulta al servicio, le pido los parametro y me suscribo a a ruta

    this.activatedRoute.params.subscribe((params: any) => {
      let id = parseInt(params.idconcert);

      let response = this.concertServices.getById(id);

      if (response) {
        //pinto el concierto
        this.concert = response;
      } else {
        //redirecciono a la página de inicio
        this.router.navigate(['/'])
      }
   })


  }

}
