import { Component, OnInit, Input } from '@angular/core';
import { Biller } from '../biller';
import { BillersService } from '../billers.service';

@Component({
  selector: 'app-billers',
  templateUrl: './billers.component.html',
  styleUrls: ['./billers.component.css']
})
export class BillersComponent implements OnInit {

  @Input() searchString: string;

  billers: Biller[];

  constructor(private billersService: BillersService) { }

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
    
  }

}
