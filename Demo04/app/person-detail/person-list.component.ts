import { Router } from '@angular/router';
import { PersonService } from './person.service';
import { Person } from './person';
import { Component, OnInit } from '@angular/core';


@Component({
    templateUrl: 'app/person-detail/person-list.component.html'
})
export class PersonListComponent implements OnInit {
    pageTitle: string = "Person";
    personList: Person[] = [];

    constructor(private personService: PersonService,
        private router: Router) { }

    onEdit(person: Person) {
        let link = ['/person', person.id];
        this.router.navigate(link);
    }

    ngOnInit() {
        this.personService.getAllAsync().subscribe(res => this.personList = res);
    }
}