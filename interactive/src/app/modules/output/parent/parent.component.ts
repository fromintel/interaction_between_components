import { Component } from '@angular/core';
import { Person, PersonRole } from "../../../interfaces/person";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  public persons: Person[]

  constructor() {
    this.persons = [
      {
        name: 'John',
        role: PersonRole.HERO,
        permissions: {
          hasEntity: true,
          isActiveAbility: false
        }
      },
      {
        name: 'Miles',
        role: PersonRole.ROBBER,
        permissions: {
          hasEntity: false,
          isActiveAbility: false
        }
      },
      {
        name: 'Jill',
        role: PersonRole.VILLAIN,
        permissions: {
          hasEntity: false,
        }
      }
    ]
  }

  removeItem(personItem: Person) {
    const newPersonsList: Person[] = this.persons.filter((person: Person) => person.name !== personItem.name);
    this.persons = [...newPersonsList];
  }
}
