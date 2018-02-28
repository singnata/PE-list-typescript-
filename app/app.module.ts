import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { EntrepreneursListComponent } from './components/list/entrepreneurs-list.component';
import { EntrepreneurDetailsComponent } from './components/details/entrepreneur-details.component';
import { EntrepreneurNewComponent } from './components/new/entrepreneur-new.component';
import { EntrepreneurFormComponent } from './components/form/entrepreneur-form.component';
import { EntrepreneurEditComponent } from './components/edit/entrepreneurs-edit.component';
import { AppComponent } from './app.component';

import { dateFormatPipe } from './pipes/date-pipe';
import { registrationFormatPipe } from './pipes/registration-pipe';

import { EntrepreneursDataService } from './services/entrepreneurs-data-service';

const routes: Routes = [
  {path: '', redirectTo: 'entrepreneurs', pathMatch: 'full'},
  //{ path: '**', redirectTo: 'entrepreneurs'},
  { path: 'entrepreneurs', component: EntrepreneursListComponent},
  { path: 'entrepreneurs/:id', component: EntrepreneurDetailsComponent},
  { path: 'new', component: EntrepreneurNewComponent},
  { path: 'entrepreneur/:id/edit', component: EntrepreneurEditComponent},
];

@NgModule({
	declarations: [
    AppComponent,
    EntrepreneursListComponent,
    EntrepreneurDetailsComponent,
    EntrepreneurNewComponent,
    EntrepreneurEditComponent,
    EntrepreneurFormComponent,
    dateFormatPipe,
    registrationFormatPipe
	],
	imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpModule, 
    BrowserModule, 
    RouterModule.forRoot(routes)
  ],
  providers: [EntrepreneursDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}