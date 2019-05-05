import {Component, OnInit, Input} from '@angular/core';
import {Book} from "../shared/book";


@Component({
  selector: 'a.bs-cart-list-item',
  templateUrl: './cart-list-item.component.html',
  styles: []
})
export class CartListItemComponent implements OnInit {
  @Input() book : Book;
  books = [];

  constructor() { }

  ngOnInit() {
  }

}