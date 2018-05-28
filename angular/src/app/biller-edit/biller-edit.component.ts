import { Component, OnInit, Input } from '@angular/core';
import { Biller } from '../biller';
import { BillersService } from '../billers.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BillerForm } from '../biller-form';

@Component({
  selector: 'app-biller-edit',
  templateUrl: './biller-edit.component.html',
  styleUrls: ['./biller-edit.component.css']
})
export class BillerEditComponent implements OnInit {

  @Input() biller: BillerForm;

  isCompanyNameValid: boolean = true;  

  constructor(private billersService: BillersService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.findOne();
  }

  update() {
    this.validateCompanyName();
    if (!this.isCompanyNameValid) return;
    this.billersService.update(this.biller)
      .subscribe(() => this.router.navigate(["/billers"]));
  }

  findOne() {
    let id = +this.activatedRoute.snapshot.paramMap.get("id");
    this.billersService.findOne(id)
      .subscribe(biller => this.biller = biller);
  }

  validateCompanyName() {
    let regex = /^[A-Za-z ]/;
    this.isCompanyNameValid = this.biller.companyName.search(regex) !== -1;
  }
}
