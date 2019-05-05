import { Component, OnInit } from '@angular/core';
import {Book} from "../shared/book";
import {BookStoreService} from "../shared/book-store.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Order} from "../shared/order";
import {OrderFactory} from "../shared/order-factory";
import {BookFactory} from "../shared/book-factory";
import {AuthService} from "../shared/authentication-service";
import {StateFactory} from "../shared/state-factory";
import {State} from "../shared/state";

@Component({
  selector: 'bs-cart',
  templateUrl: './cart-list.component.html',
  styles: []
})
export class CartListComponent implements OnInit {
  books: Book[];
  order: Order;

  constructor (
      private bs: BookStoreService,
      private router: Router,
      private route: ActivatedRoute,
      public authService: AuthService
  ) { }

  ngOnInit() {
    this.books = JSON.parse(localStorage.getItem('cart'));
    console.log(this.books);
  }

  orderCart() {
    const order:Order = OrderFactory.empty();
    order.books = JSON.parse(localStorage.getItem('cart'));
    let gross = 0;
    order.books.forEach(function (book) {
      gross += book.brutto_price;
    });
    order.gross = gross;
    order.net = gross/1.1;
    order.user_id = this.authService.getCurrentUserId();
    this.bs.saveOrder(order).subscribe(() => {
      localStorage.removeItem('cart');
      this.router.navigateByUrl('/orders');
    });
    console.log(order);
  }

  getPrice() {

    // gesamtpreis zusammenrechnen
    let price = 0;
    for(let i = 0; i < this.books.length; i++) {
      price += this.books[i].brutto_price;
    }
    return price.toFixed(2);
  }


}