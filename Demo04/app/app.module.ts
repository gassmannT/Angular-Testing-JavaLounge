import { PersonDataService } from './person-detail/person-data.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { PersonListComponent } from './person-detail/person-list.component';
import { PersonService } from './person-detail/person.service';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: PersonListComponent },
  { path: 'person/:personId', component: PersonDetailComponent },
  { path: '**', redirectTo: '/persons', pathMatch: 'full' }
];


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
    InMemoryWebApiModule.forRoot(PersonDataService, { delay: 250 })
  ],
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonDetailComponent
  ],
  providers: [
    PersonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
