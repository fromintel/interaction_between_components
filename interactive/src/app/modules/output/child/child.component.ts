import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from "../../../interfaces/person";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() personEntity: Person;
  @Output() onRemove: EventEmitter<Person> = new EventEmitter<Person>();

  remove() {
    this.onRemove.emit(this.personEntity);
  }
}
