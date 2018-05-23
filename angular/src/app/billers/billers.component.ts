import { Component, OnInit } from '@angular/core';
import { Biller } from '../biller';

@Component({
  selector: 'app-billers',
  templateUrl: './billers.component.html',
  styleUrls: ['./billers.component.css']
})
export class BillersComponent implements OnInit {

  billers: Biller[];

  constructor() { }

  ngOnInit() {
    this.billers = [
      { id: 1, companyName: "Some cool company" },
      { id: 1, companyName: "Some cool company" },
      { id: 1, companyName: "Some cool company" },
      { id: 1, companyName: "Some cool company" },
      { id: 1, companyName: "Some cool company" },
      { id: 1, companyName: "Some cool company" },
      { id: 1, companyName: "Some cool company" }
    ]
  }

}
