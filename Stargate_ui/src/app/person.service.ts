import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from './person';
import { People } from './people';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  getAllPeople(cb: any){
    this.http.get<People>('https://localhost:7204/Person').subscribe(cb);
  }

  getOnePerson(cb: any, name: string){
    this.http.get<Person>('https://localhost:7204/Person/${name}').subscribe(cb);
  }

  addPerson(cb: any, person: Person){
    this.http.post<Person>('https://localhost:7204/Person/', person).subscribe(cb);
  }

  updatePerson(cb: any, person: Person){
    this.http.put<Person>('https://localhost:7204/Person/', person).subscribe(cb);
  }

  constructor(private http: HttpClient) { }
}
