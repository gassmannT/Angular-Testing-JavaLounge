import { Person } from './person';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class PersonDataService implements InMemoryDbService {
    createDb() {
        let persons: Person[] = [
            {
                id: 1,
                firstname: "Thomas",
                lastname: "Huber",
                twitterhandle: "thomasclaudiushuber"
            },
            {
                id: 2,
                firstname: "Thomas",
                lastname: "Bandixen",
                twitterhandle: "tbandixen"
            },
            {
                id: 3,
                firstname: "Thomas",
                lastname: "Gassmann",
                twitterhandle: "gassmannT"
            }
        ];
        return { persons };
    }
}