import { Biller } from "./biller";
import { Customer } from "./customer";

export class Payment {
  id: number;
  date: string;
  customer: Customer;
  biller: Biller;
  account: string;
  amount: number;
}
