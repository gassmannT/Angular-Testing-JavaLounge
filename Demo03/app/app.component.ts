import { Person } from './person-detail/person';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
        <person-detail [personId]="personId"></person-detail>
        `
})
export class AppComponent implements OnInit {
    public title: string;
    public personId: number;

    constructor() { }

    ngOnInit() {
        this.title = "Hallo JavaLounge";
        this.personId = 1;
    }
}
