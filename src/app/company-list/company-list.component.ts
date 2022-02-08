import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../login/auth.service';
import { Company } from './company';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
  animations: [
    trigger('sectionAnimations', [
      transition(':enter', [
        query('.card__section', [
          style({opacity: 0, transform: 'translateY(-100px)'}),
          stagger(150, [
            animate('500ms cubic-bezier(0.35, 0, 0.25, 1)',
            style({ opacity: 1, transform: 'none' }))
          ])
        ])
      ])
    ]),
  ],
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];
  popup: boolean = false;

  constructor(private readonly authService: AuthService) {}

  ngOnInit(): void {
    this.companies.push(new Company('Some Company', 'Researching', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'John Doe, 404-404-9999, email@email.com', 'Jane Doe, 404-404-9999, email@email.com'));
  }

  setCanEdit(i: number, e: Event) {
    let target = e.target as HTMLSpanElement | HTMLButtonElement | HTMLHeadingElement;
    let canEdit = this.companies[i].canEdit;
    
    if (target.id === 'companyName') {
      this.companies.forEach(c => c.canEdit.companyName = false)
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
    const newCompany = new Company(
      form.value.companyName,
      form.value.companyStatus,
      form.value.companyInfo,
      form.value.companyPerformance,
      form.value.contactOne,
      form.value.contactTwo,
      form.value.contactThree,
    );
    newCompany.contacts = newCompany.contacts.filter(element => {
      return element !== '';
    });
    this.companies.push(newCompany);
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

  logOut() {
    this.authService.logout();
  }

  // Drag and drop functionality

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.companies, event.previousIndex, event.currentIndex);
  }
}
