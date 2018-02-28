import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { EntrepreneursDataService } from '../../services/entrepreneurs-data-service';

import { Entrepreneur } from '../../models/entrepreneur-interface';

@Component ({
  selector: 'entrepreneur-details',
	templateUrl: 'entrepreneur-details.component.html',
	styleUrls: ['entrepreneur-details.component.scss']
})

export class EntrepreneurDetailsComponent implements OnInit {

	entrepreneur: Entrepreneur;
	id: number;
	errorMessage: string;

  constructor(
		private route: ActivatedRoute,
		private entrepreneursDataService: EntrepreneursDataService) {}

  ngOnInit(): void {
		console.log('ng on init')
	 	this.id = +this.route.snapshot.params['id'];
		this.loadEntrepreneurDetails(this.id); 
		this.scrollToTheTopOfThePage();
	} 
	
	loadEntrepreneurDetails(id: number): void {
		this.entrepreneursDataService.loadEntrepreneurDetails(id)
		.subscribe((entrepreneur: Entrepreneur) => (this.entrepreneur = entrepreneur));
	}

	scrollToTheTopOfThePage(): void {
    window.scrollTo(0, 0);
  }
} 