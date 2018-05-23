import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillerNewComponent } from './biller-new.component';

describe('BillerNewComponent', () => {
  let component: BillerNewComponent;
  let fixture: ComponentFixture<BillerNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillerNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillerNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
