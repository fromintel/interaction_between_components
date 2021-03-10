import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ReactiveFormsModule } from "@angular/forms";



@NgModule({
    declarations: [ParentComponent, ChildComponent],
    exports: [
        ParentComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class OutputModule { }
