// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { CartItem } from './models/cart-item.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {
//   private apiUrl = 'http://localhost:8080/api/cart/items'; // Replace with your Spring Boot backend URL

//   constructor(private http: HttpClient) { }

//   getCartItems(): Observable<CartItem[]> {
//     return this.http.get<CartItem[]>(this.apiUrl);
//   }

//   addCartItem(cartItem: CartItem): Observable<void> {
//     return this.http.post<void>(this.apiUrl, cartItem);
//   }

//   removeCartItem(itemId: number): Observable<void> {
//     const url = `${this.apiUrl}/${itemId}`;
//     return this.http.delete<void>(url);
//   }

//   updateCartItemQuantity(itemId: number, quantity: number): Observable<void> {
//     const url = `${this.apiUrl}/${itemId}`;
//     return this.http.put<void>(url, quantity);
//   }
// }
