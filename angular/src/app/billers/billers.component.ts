import { Component, OnInit, Input } from '@angular/core';
import { Biller } from '../biller';
import { BillersService } from '../billers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-billers',
  templateUrl: './billers.component.html',
  styleUrls: ['./billers.component.css']
})
export class BillersComponent implements OnInit {

  @Input() searchString: string;

  billers: Biller[];

  constructor(private billersService: BillersService,
              private router: Router) { }

  ngOnInit() {
    this.getAllBillers();
  }

  getAllBillers() {
    this.billersService.findAll()
      .subscribe(billers => this.billers = billers);
  }

  onChangeSearchString() {
    console.log(this.searchString);
  }

  delete(id: number) {
    this.billersService.delete(id)
      .subscribe(() => this.router.navigate(["/billers"]));
    this.billers = this.billers.filter(biller => biller.id != id);
  }
}
