import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BillerForm } from '../biller-form';
import { BillersService } from '../billers.service';

@Component({
  selector: 'app-biller-new',
  templateUrl: './biller-new.component.html',
  styleUrls: ['./biller-new.component.css']
})
export class BillerNewComponent implements OnInit {

  @Input() billerForm: BillerForm;

  isCompanyNameValid: boolean = true;

  constructor(private billersService: BillersService,
              private router: Router) { }

  ngOnInit() {
    this.billerForm = new BillerForm();
  }

  createBiller() {
    this.validateCompanyName();
    if (!this.isCompanyNameValid) return;
    this.billersService.create(this.billerForm)
      .subscribe(() => this.router.navigate(["/billers"]));
  }

  validateCompanyName() {
    let regex = /^[A-Za-z ]/;
    this.isCompanyNameValid = this.billerForm.companyName.search(regex) !== -1;
  }
}
