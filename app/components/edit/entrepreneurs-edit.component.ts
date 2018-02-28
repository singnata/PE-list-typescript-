import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { EntrepreneursDataService } from '../../services/entrepreneurs-data-service';

import { Entrepreneur } from '../../models/entrepreneur-interface';

@Component({
  selector: 'entrepreneur-edit',
  templateUrl: 'entrepreneur-edit.component.html',
  styleUrls: ['entrepreneur-edit.component.scss']
})

export class EntrepreneurEditComponent implements OnInit {

  entrepreneur: Entrepreneur;
  isShowMessage: boolean = false;
  successMessage: string = 'changes are saved';
  id: number;

  constructor(
    private entrepreneursDataService: EntrepreneursDataService, 
    private route: ActivatedRoute,
    private router: Router){}

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.loadEntrepreneurDetails(this.id); 
  }

  loadEntrepreneurDetails(id: number): void {
    this.entrepreneursDataService.loadEntrepreneurDetails(id)
    .subscribe((entrepreneur: Entrepreneur) => (this.entrepreneur = entrepreneur));
  }

  saveEntrepreneurChanges(event: Entrepreneur): void {
    this.isShowMessage = true;
    this.entrepreneursDataService.saveEntrepreneurChanges(event, this.id)
      .subscribe((data: Entrepreneur) => {  
        this.entrepreneur = Object.assign({}, this.entrepreneur, event); 
      });
    setTimeout(() => {
      this.isShowMessage = false; 
      this.router.navigate(['/entrepreneurs']);
    }, 2500); 
  }
}