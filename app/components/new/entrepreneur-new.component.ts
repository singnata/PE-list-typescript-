import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { EntrepreneursDataService } from '../../services/entrepreneurs-data-service';

import { Entrepreneur } from '../../models/entrepreneur-interface';

@Component ({
  selector: 'entrepreneur-new',
  templateUrl: 'entrepreneur-new.component.html',
  styleUrls: ['entrepreneur-new.component.scss']
})

export class EntrepreneurNewComponent {

  successMessage: string = '';
  isShowMessage: boolean = false;
  entrepreneur: Entrepreneur;

  constructor(
    private entrepreneursDataService: EntrepreneursDataService,
    private router: Router) {}

  saveNewEntrepreneur(event: Entrepreneur): void {
    this.isShowMessage = true;
    this.entrepreneursDataService.saveNewEntrepreneur(event)
    .subscribe((data: Entrepreneur) => {
      this.entrepreneur = Object.assign({}, this.entrepreneur, event);
      console.log(this.entrepreneur);
    });
    setTimeout(() => {
      this.isShowMessage = false; 
      this.router.navigate(['/entrepreneurs']);
    }, 2500); 
	};
  }
  


