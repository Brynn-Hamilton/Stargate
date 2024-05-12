import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { AstronautDutyComponent } from './astronaut-duty/astronaut-duty.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { AstronautDetailsComponent } from './astronaut-details/astronaut-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    AstronautDutyComponent,
    AddPersonComponent,
    AstronautDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
