import { Person } from './person';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'person-detail',
  templateUrl: 'app/person-detail/person-detail.component.html'
})
export class PersonDetailComponent implements OnInit {
  title: string = "JavaLounge";

  @Input()
  person: Person;

  constructor() { }

  ngOnInit(): void { }

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