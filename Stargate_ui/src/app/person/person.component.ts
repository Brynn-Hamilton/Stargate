import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';
import { People } from '../people';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent implements OnInit{
people: People = <People>{};

constructor(private PersonSrv: PersonService){
  this.refresh();
}

ngOnInit(): void {
  }

refresh(){
  this.PersonSrv.getAllPeople(
    (result: People) => {
      this.people = result;
      // this.GetPerson(this.people[0].name)
    }
  )
}

// GetPerson(name: string){
//   this.PersonSrv.getOnePerson(
//     (result: Person) => {
//       this.person = result
//     },
//     name
//   )
// }
}
