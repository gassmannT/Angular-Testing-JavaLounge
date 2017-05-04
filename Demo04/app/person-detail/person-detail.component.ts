import { PersonService } from './person.service';
import { Person } from './person';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: 'app/person-detail/person-detail.component.html'
})
export class PersonDetailComponent implements OnInit {
  person: Person;

  constructor(
    private personService: PersonService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let personId = +params["personId"];
      this.personService.getAsync(personId).subscribe(p => this.person = p);
    });

  }

  onSave(valid: boolean) {
    if (valid) {
      this.personService.save(this.person).subscribe(() => {

        this.router.navigate(['/'])
      });
      //this.myService.Save(person);
    }
  }

  onBack() {
    this.router.navigate(['/'])
  }
}