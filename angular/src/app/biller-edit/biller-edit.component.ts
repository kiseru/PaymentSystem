import { Component, OnInit, Input } from '@angular/core';
import { Biller } from '../biller';
import { BillersService } from '../billers.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-biller-edit',
  templateUrl: './biller-edit.component.html',
  styleUrls: ['./biller-edit.component.css']
})
export class BillerEditComponent implements OnInit {

  @Input() biller: Biller;

  constructor(private billersService: BillersService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.findOne();
  }

  update() {
    this.billersService.update(this.biller)
      .subscribe(() => this.router.navigate(["/billers"]));
  }

  findOne() {
    let id = +this.activatedRoute.snapshot.paramMap.get("id");
    this.billersService.findOne(id)
      .subscribe(biller => this.biller = biller);
  }
}
