import { Injectable } from '@angular/core';
import { Iitems } from './items/Iitems';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: Array<Iitems> = [];
  counter: number = 0;
  sum: number = 0;
  fee: number = 0;
  total: number = 0;
  discount: number |undefined  

  constructor() {

   }

  addToCart(dish: Iitems) {
    this.cartItems.push(dish);
    this.counter++;
    this.getSum(dish);
    this.getServicefee(this.sum);
    this.getTotal();
    this.getDiscount(this.total);
  }

  getItems() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
    return this.cartItems;
  }

  getSum(dish: Iitems) {
    this.sum += dish.price;
  return this.sum;
  } 

  getServicefee (tot: number) {
    this.fee = (tot / 10);
    return this.fee;
  }

  getTotal () {
    return (this.total = this.sum + this.fee);
}

  getDiscount(tot: number) {
      if(tot >= 40) {
        this.discount = tot * 0.15;
      } 
      return this.discount;
    }
  }
