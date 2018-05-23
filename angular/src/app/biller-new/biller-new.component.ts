import { Component, OnInit, Input } from '@angular/core';
import { Biller } from '../biller';

@Component({
  selector: 'app-biller-new',
  templateUrl: './biller-new.component.html',
  styleUrls: ['./biller-new.component.css']
})
export class BillerNewComponent implements OnInit {

  @Input() newBiller: Biller; 

  constructor() { }

  ngOnInit() {
    this.newBiller = new Biller();
  }

  createBiller() {
    console.log(this.newBiller);
  }

}
