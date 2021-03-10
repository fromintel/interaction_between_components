import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  formTeams: FormGroup

  ngOnInit() {
    this.initTeamForm();
    this.handleFormValue();
  }

  initTeamForm(): void {
    this.formTeams = new FormGroup({
      email: new FormControl({ value: '', disabled: false } , [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(14)]),
      metadata: new FormControl({ value: '', disabled: true } , []),
      groups: new FormGroup({
        name: new FormControl('John', Validators.required)
      }),
      lessons: new FormArray([])
    })
  }

  handleFormValue(): void {
    this.formTeams.valueChanges.subscribe({
      next: (data) => {
        console.log(data);
      }
    })
  }

  submit(): void {
    console.log(this.formTeams);
    console.log(this.formTeams.value);
  }

  addControl() {
    const field = new FormControl('', []);
    (this.formTeams.get('lessons') as FormArray).push(field);
  }
}
