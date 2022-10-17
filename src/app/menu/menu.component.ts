import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'; 
import { CartService } from '../cart.service';
import { items } from '../items/items';
import { Iitems } from '../items/Iitems'; 

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  dishes: Array<Iitems> = items;
  constructor(private route : ActivatedRoute, private cs: CartService) 
  { }

  ngOnInit(): void {
    this.dishes.forEach((elem) => {
      elem.str_price = this.stringify(elem.price);
    });
  }

  stringify(num: number) {
    return String(num) + "0";
  }; 

  addToCart(id: number) {
    console.log ("gericht: ",this.dishes[id]);
    alert("Your product has been added to the cart!");
    this.cs.addToCart(this.dishes[id]);
  }

}
