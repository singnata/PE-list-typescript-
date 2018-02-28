import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { EntrepreneursDataService } from '../../services/entrepreneurs-data-service';

import { Entrepreneur } from '../../models/entrepreneur-interface';

@Component ({
  selector: 'entrepreneurs-list',
  templateUrl: 'entrepreneurs-list.component.html',
  styleUrls: ['entrepreneurs-list.component.scss']
})

export class EntrepreneursListComponent implements OnInit {

  entrepreneurs: Entrepreneur[];
  confirmMessage: string = 'Are You Sure You Want to Delete PE ';

  constructor(
    private entrepreneursService: EntrepreneursDataService,
    private router: Router,
		private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadEntrepreneursList();
  }

  loadEntrepreneursList() {
    return this.entrepreneursService.loadEntrepreneursList()
    .subscribe((data: Entrepreneur[]) => (this.entrepreneurs = data));  
  }

  deleteEntrepreneur(id: number, name: string): void {    
    if(confirm(this.confirmMessage + name)) {
      this.entrepreneursService.deleteEntrepreneur(id)
      .subscribe(() => this.loadEntrepreneursList());
    }   
  }
}