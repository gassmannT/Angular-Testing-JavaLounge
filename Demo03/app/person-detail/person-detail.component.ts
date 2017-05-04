import { PersonService } from './person.service';
import { Person } from './person';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'person-detail',
  templateUrl: 'app/person-detail/person-detail.component.html'
})
export class PersonDetailComponent implements OnInit {
  person: Person;

  @Input()
  personId: number;

  constructor(private _personService: PersonService) { }

  ngOnInit(): void {
    this._personService.getPersonAsync(this.personId).then(p => {
      this.person = p;
    });
  }

  onSave({ value, valid }: { value: Person, valid: boolean }) {
    //Example of Object destructuring
    if (valid) {
      //this.myService.Save(person);
    }
  }

  onBack() {
    //this._router.navigate(['/persons'])
  }
}