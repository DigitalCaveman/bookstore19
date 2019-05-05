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
    let booksLocal;
    booksLocal = JSON.parse(localStorage.getItem('cart'));
    if (booksLocal){
      booksLocal.forEach(book => {
        book.brutto_price = parseFloat(book.brutto_price);
      });
    }
    this.books = booksLocal;
  }

  orderCart() {
    const order:Order = OrderFactory.empty();

    let booksLocal;
    booksLocal = JSON.parse(localStorage.getItem('cart'));
    booksLocal.forEach(book => {
      book.brutto_price = parseFloat(book.brutto_price);
    });

    order.books = booksLocal;

    let gross : any = 0;
    console.log(order.books);
    order.books.forEach(function (book) {
      console.log(typeof book.brutto_price);
      gross += book.brutto_price;
    });
    order.gross = gross;
    order.net = gross/1.1;
    order.user_id = this.authService.getCurrentUserId();
    //TODO

    new State(order.id,order.gross, 'offen', '', new Date(), new Date()));
    this.bs.saveOrder(order).subscribe(() => {
      localStorage.removeItem('cart');
      this.router.navigateByUrl('/orders');
    });
    console.log(order);
  }

  getPrice() {
    let price : any = 0;
    this.books.forEach(function (book) {
      price += book.brutto_price;
    });
    return price;
  }
}