import { Person } from './person-detail/person';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
        <person-detail [person]="selectedPerson"></person-detail>
        `
})
export class AppComponent implements OnInit {
    public title: string;
    public selectedPerson: Person;

    constructor() { }

    ngOnInit() {
        this.title = "Hallo JavaLounge";
        this.selectedPerson = {
            id: 1,
            firstname: "Thomas",
            lastname: "Gassmann",
            twitterhandle: "GassmannT"
        };
    }
}
