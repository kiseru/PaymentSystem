import { Component, OnInit, Input } from '@angular/core';
import { Biller } from '../biller';

@Component({
  selector: 'app-biller-edit',
  templateUrl: './biller-edit.component.html',
  styleUrls: ['./biller-edit.component.css']
})
export class BillerEditComponent implements OnInit {

  @Input() biller: Biller;

  constructor() { }

  ngOnInit() {
    this.biller = { id: 1, companyName: "Some Cool Company" }
  }

  update() {
    console.log(this.biller);
  }

}
