import { Person } from './person';
import { PersonService } from './person.service';
import { async, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpModule, Response, ResponseOptions, XHRBackend } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

describe("PersonService", () => {
    let service: PersonService;
    let mockBackend: MockBackend;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [PersonService, MockBackend, { provide: XHRBackend, useClass: MockBackend }]
        });
    });

    // beforeEach(inject([PersonService], (s: PersonService) => {
    //     service = s;
    // }));

    beforeEach(() => {
        service = TestBed.get(PersonService);
        mockBackend = TestBed.get(XHRBackend);
    });

    it("should get a person async", async(() => {
        service.getPersonAsync(1).then((result) => {
            expect(result.firstname).toBe("Thomas");
        });
    }));

    it("should get a person fakeAsync", fakeAsync(() => {
        let p;
        service.getPersonAsync(1).then((result) => {
            p = result;
        });
        expect(p).not.toBeDefined();

        tick(50);
        expect(p).not.toBeDefined();

        tick(50);
        expect(p).toBeDefined();

    }));

    it("should get all persons by observables", async(() => {
        // Arrange
        let items: Person[];

        mockBackend.connections.subscribe((c: MockConnection) => {
            expect(c.request.url).toBe("app/person-detail/person-data.json");
            c.mockRespond(new Response(
                new ResponseOptions({
                    body: `[
                        {
                            "firstname": "Thomas"
                        }
                    ]`
                })
            ));
        });

        // Act
        service.getPersons().subscribe((data) => {
            items = data;
        });

        // Assert
        mockBackend.verifyNoPendingRequests();
        expect(items[0].firstname).toBe("Thomas");
    }));

});
