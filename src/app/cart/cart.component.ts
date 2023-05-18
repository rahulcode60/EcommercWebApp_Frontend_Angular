import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const cartItemsParam = this.route.snapshot.queryParamMap.get('cartItems');
    if (cartItemsParam) {
      this.cartItems = JSON.parse(cartItemsParam);
    }
  }
  removeFromCart(items: any) {
    this.cartItems.splice(items, 1);
  }
}
