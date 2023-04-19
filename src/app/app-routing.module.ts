import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListConcertComponent } from './components/list-concert/list-concert.component';
import { ContactComponent } from './components/contact/contact.component';
import { C404Component } from './components/c404/c404.component';
import { ConcertViewComponent } from './components/concert-view/concert-view.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', component: ListConcertComponent },
  { path: "contacto", component: ContactComponent },
  { path: "concert/:idconcert", component: ConcertViewComponent},
  { path: '**', component: C404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
