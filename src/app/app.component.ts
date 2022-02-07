import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Company } from './company';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'insitenCodingChallenge';

  companies: Company[] = [];
  popup: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.companies.push(new Company('Arrow', 'Researching', 'lorem', 'good', 'John Doe, 404-404-9999, email@email.com', 'Jane Doe, 404-404-9999, email@email.com'));
    this.companies.push(new Company('Other', 'Researching', 'lorem', 'good', 'John Doe, 404-404-9999, email@email.com', 'Jane Doe, 404-404-9999, email@email.com'));
    this.companies.push(new Company('New', 'Researching', 'lorem', 'good', 'John Doe, 404-404-9999, email@email.com', 'Jane Doe, 404-404-9999, email@email.com'));
  }

  setCanEdit(i: number, e: Event) {
    let target = e.target as HTMLSpanElement | HTMLButtonElement;
    let canEdit = this.companies[i].canEdit;
    
    if (target.id === 'companyName') {
      this.companies.forEach(c => c.canEdit.info = false)
      canEdit.companyName = true
    }
    
    if (target.id === 'status') {
      this.companies.forEach(c => c.canEdit.status = false);
      canEdit.status = true;
    }

    if (target.id === 'info') {
      this.companies.forEach(c => c.canEdit.info = false);
      canEdit.info = true;
    }
    
    if (target.id === 'contact') {
      this.companies.forEach(c => c.canEdit.contact = false);
      canEdit.contact = true;
    }
    
    if (target.id === 'performance') {
      this.companies.forEach(c => c.canEdit.performance = false);
      canEdit.performance = true;
    }
    
    if (target.id === 'edit') {
      this.companies.forEach(c => {
        c.canEdit.companyName = false;
        c.canEdit.status = false;
        c.canEdit.info = false;
        c.canEdit.contact = false;
        c.canEdit.performance = false;
      });

      canEdit.companyName = true;
      canEdit.status = true;
      canEdit.info = true;
      canEdit.contact = true;
      canEdit.performance = true;
    }
  }

  finishEdit(i: number) {
    let canEdit = this.companies[i].canEdit;
    
    this.companies[i].contacts = this.companies[i].contacts.filter(element => {
      return element !== '';
    });

    canEdit.companyName = false;
    canEdit.status = false;
    canEdit.info = false;
    canEdit.contact = false;
    canEdit.performance = false;
  }

  addNewCompany(form: NgForm) {
    this.companies.push(new Company(
      form.value.companyName,
      form.value.companyStatus,
      form.value.companyInfo,
      form.value.companyPerformance,
      form.value.contact
    ));
    this.popup = false;
  }

  deleteCompany(i: number) {
    this.companies.splice(i, 1);
  }

  addContact(i: number) {
    this.companies[i].contacts.push('');
    this.companies[i].canEdit.contact = true;
  }

  customTrackBy(index: number): any {
    return index;
  }
}
