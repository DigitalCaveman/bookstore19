import { Component, OnInit } from '@angular/core';
import {Order} from "../shared/order";
import {BookStoreService} from "../shared/book-store.service";
import {AuthService} from "../shared/authentication-service";

@Component({
  selector: 'bs-order-list',
  templateUrl: './order-list.component.html',
  styles: []
})
export class OrderListComponent implements OnInit {
  orders : Order[];
  constructor(private bs:BookStoreService, private authenticationService:AuthService) { }

  ngOnInit() {
    if (localStorage.is_admin === '1'){
      console.log("admin");
      this.bs.getAllOrdersAdmin().subscribe(res => {
        this.orders = res;
        console.log(this.orders);
        //TODO: Gruppieren
      });

    } else {
      console.log("not admin");
      let user_id:number = this.authenticationService.getCurrentUserId();
      this.bs.getAllOrders(user_id).subscribe(res => {
        this.orders = res;
      });

    }


  }
}
