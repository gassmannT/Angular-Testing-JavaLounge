import { Person } from './person';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class PersonService {

    constructor(private http: Http) { }

    getPersonAsync(id: number): Promise<Person> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    id: 1,
                    firstname: "Thomas",
                    lastname: "Gassmann",
                    twitterhandle: "GassmannT"
                });
            }, 100);
        });
    }

    getPersons(): Observable<Person[]> {
        return this.http
            .get("app/person-detail/person-data.json")
            .map(x => x.json());
    }
}