import { Component, Input, Output, EventEmitter} from '@angular/core';
import { NgForm, Validators, RequiredValidator, FormControl } from '@angular/forms';

import { Entrepreneur } from '../../models/entrepreneur-interface';

import { dateFormatPipe } from '../../pipes/date-pipe';

@Component({
  selector: 'entrepreneur-form',
  templateUrl: 'entrepreneur-form.component.html',
  styleUrls: ['entrepreneur-form.component.scss']
})

export class EntrepreneurFormComponent {

  constructor() {}

  @Input() detail: Entrepreneur;

  @Output() edit: EventEmitter<Entrepreneur> = new EventEmitter<Entrepreneur>();
  @Output() new: EventEmitter<Entrepreneur> = new EventEmitter<Entrepreneur>();

  saveEntrepreneur(entrepreneur: Entrepreneur): void {
    this.edit.emit(entrepreneur);
    this.new.emit(entrepreneur);
  }  
}