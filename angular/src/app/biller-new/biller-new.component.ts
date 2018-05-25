import { Component, OnInit, Input } from '@angular/core';
import { BillersService } from '../billers.service';
import { BillerForm } from '../biller-form';
import { Router } from '@angular/router';

@Component({
  selector: 'app-biller-new',
  templateUrl: './biller-new.component.html',
  styleUrls: ['./biller-new.component.css']
})
export class BillerNewComponent implements OnInit {

  @Input() billerForm: BillerForm; 

  constructor(private billersService: BillersService,
              private router: Router) { }

  ngOnInit() {
    this.billerForm = new BillerForm();
  }

  createBiller() {
    this.billersService.create(this.billerForm)
      .subscribe(() => this.router.navigate(["/billers"]));
  }
}
