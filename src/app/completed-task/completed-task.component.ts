import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-completed-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './completed-task.component.html',
  styleUrls: ['./completed-task.component.scss']
})


export class CompletedTaskComponent {
// firstName : string = 'Kishor';
// lastName : string = 'Fawade';

firstName = signal('Kishor');
lastName = signal('Fawade');
qty = signal<number>(0)

fullName =computed(() => `${this.firstName()} ${this.lastName()}`);

changeFirstName(firstName : any) {
  console.log(firstName)
  // this.firstName = firstName.value;
  this.firstName.set(firstName);
}
changeLastName(lastName : any) {
  // this.lastName = lastName.value;
  this.lastName.set(lastName);
}
inc() {
this.qty.update((q) => q+1);
}

dec() {
  this.qty.update((q) => q-1);
}
}
