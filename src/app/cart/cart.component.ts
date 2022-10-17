import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Iitems } from '../items/Iitems';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  items: Array<Iitems> = [];
  counter: number = 0;
  str_discount: string | undefined;
  str_sum: string = '';
  str_servicefee: string | undefined;
  str_tot: string = '';

  constructor(private cs: CartService) { }

  ngOnInit(): void {
    this.items = this.cs.getItems();
    this.counter = this.cs.counter;
    this.str_sum = this.stringify(this.cs.sum);
    console.log("discount  ", this.cs.discount, "  summe ", this.cs.sum);
    this.str_servicefee = this.stringify(this.cs.fee);
    if (this.cs.discount) {
      this.str_discount = this.stringify(this.cs.discount);
      this.str_tot = this.stringify(this.cs.total - this.cs.discount);
    } else {
      this.str_tot = this.stringify(this.cs.total);
    }
  }

  stringify(num: number) {
    console.log("an stringify uebergeben   ", num);
    return String(num.toFixed(2))
  }

 /*  resetVars() {
    this.counter = 0;
    this.str_discount = undefined;
    this.str_sum = '';
    this.str_servicefee = undefined;
    this.str_tot = '';

  }
 */
  ngOnDestroy() {}

  /* clearCart() {
    this.cs.clearCart();
    this.resetVars();
    this.ngOnDestroy();
  } */
} 
