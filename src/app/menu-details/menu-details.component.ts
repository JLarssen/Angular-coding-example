import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CartService } from '../cart.service';
import { items } from '../items/items';
import { Iitems } from '../items/Iitems';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css']
})
export class MenuDetailsComponent implements OnInit {
  dishInfo: Iitems = {} as Iitems;
  id: number = 0;
  constructor(private route: ActivatedRoute, private cs: CartService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = Number(params["id"]);
      this.dishInfo = items[this.id];
      items[this.id].str_price = this.stringify(items[this.id].price);
    });
  }

  addToCart() {
    alert("Your product has been added to the cart!");
    this.cs.addToCart(this.dishInfo);
  }

  stringify(num: number) {
    return String(num) + "0";
  };
}
