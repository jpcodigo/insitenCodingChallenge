export class Company {

  companyName: string = '';

  status: {
    options: string[],
    selectedValue: string
  } = {
    options: [
      'Researching',
      'Pending Approval',
      'Approved',
      'Declined',
      'Negotiating',
      'Acquired'
    ],
    selectedValue: ''
  }; 

  info: string = '';

  contacts: string[] = [];

  financial_performance: string = '';

  canEdit: {
    companyName: boolean,
    status: boolean,
    info: boolean,
    contact: boolean,
    performance: boolean
  } = {
    companyName: false,
    status: false,
    info: false,
    contact: false,
    performance: false
  }

  constructor(cN: string, sV: string, info: string, fP: string, ...contacts: string[]) {
    this.companyName = cN;
    this.status.selectedValue = sV;
    this.info = info;
    this.financial_performance = fP;
    this.contacts.push(...contacts);
  }
}
