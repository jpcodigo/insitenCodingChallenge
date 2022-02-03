import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'insitenCodingChallenge';

  companies: { 
    status: string, 
    info: string, 
    contacts: {name: string, number: string, email: string}, 
    financial_performance: string, 
    canEdit: {status: boolean, info: boolean, name: boolean, number: boolean, email: boolean, performance: boolean} 
  }[] = [
    {
      status: 'Pending Approval',
      info: 'lorem ipsum',
      contacts: {
        name: 'John Smith',
        number: '404-404-4044',
        email: 'email@website.com'
      },
      financial_performance: 'Good',
      canEdit: {
        status: false,
        info: false,
        name: false,
        number: false,
        email: false,
        performance: false,
      }
    }
  ];

  constructor() {}

  ngOnInit(): void {
    
  }

  setStatusEdit(i: number){
    this.companies.forEach(c => c.canEdit.status = false)
    this.companies[i].canEdit.status = true
  }
  
  setInfoEdit(i: number){
    this.companies.forEach(c => c.canEdit.info = false)
    this.companies[i].canEdit.info = true
  }
  
  setNameEdit(i: number){
    this.companies.forEach(c => c.canEdit.name = false)
    this.companies[i].canEdit.name = true
  }
  
  setNumberEdit(i: number){
    this.companies.forEach(c => c.canEdit.number = false)
    this.companies[i].canEdit.number = true
  }
  
  setEmailEdit(i: number){
    this.companies.forEach(c => c.canEdit.email = false)
    this.companies[i].canEdit.email = true
  }
  
  setPerformanceEdit(i: number){
    this.companies.forEach(c => c.canEdit.performance = false)
    this.companies[i].canEdit.performance = true
  }
}
