import {Component, Input, OnInit} from '@angular/core';
import {Order} from "../shared/order";
import {BookStoreService} from "../shared/book-store.service";
import {ActivatedRoute} from "@angular/router";
import {Book} from "../shared/book";
import {State} from "../shared/state";
import {AuthService} from "../shared/authentication-service";

@Component({
  selector: 'bs-order-details',
  templateUrl: './order-detail.component.html',
  styles: []
})
export class OrderDetailComponent implements OnInit {
  @Input() order : Order;
  @Input() state : State;
  constructor(
      private bs:BookStoreService,
      private route:ActivatedRoute,
      public authService : AuthService
  ) { }

  ngOnInit() {
    const params = this.route.snapshot.params;

    this.bs.getSingleOrder(params['id']).subscribe(
        datafromObservable => this.order = datafromObservable
    );

    this.bs.getSingleState(params['id']).subscribe(
        dataFromObservable => this.state = dataFromObservable
    );
    //TODO: State ändern
  }

  updateState(){
    console.log("edit state")

  }

}
