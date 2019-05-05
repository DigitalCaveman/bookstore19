import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import {Author, Book, Image} from "./book";
import {Order} from "./order";
import {State} from "./state";

@Injectable()
export class BookStoreService {

  private api = 'http://bookstore19.s1510456001.student.kwmhgb.at/api';


  constructor(private http: HttpClient) {}

  //books
  getAllBooks() : Observable<Array<Book>> {
      return this.http.get(`${this.api}/books`)
          .pipe(retry(3))
          .pipe(catchError(this.errorHandler));

  }

  getSingle(isbn : string) : Observable<Book> {
      return this.http.get(`${this.api}/book/${isbn}`)
          .pipe(retry(3))
          .pipe(catchError(this.errorHandler));
  }

    create (book : Book) : Observable<any> {
      return this.http.post(`${this.api}/book`, book)
          .pipe(retry(3))
          .pipe(catchError(this.errorHandler));
  }

    update (book : Book) : Observable<any> {
        return this.http.put(`${this.api}/book/${book.isbn}`, book)
            .pipe(retry(3))
            .pipe(catchError(this.errorHandler));
    }

    remove (isbn: string) : Observable<any>  {
        return this.http.delete(`${this.api}/book/${isbn}`)
            .pipe(retry(3))
            .pipe(catchError(this.errorHandler));
    }

    //orders
    saveOrder(order: Order): Observable<any> {
        return this.http.post(`${this.api}/order`, order)
            .pipe(retry(3))
            .pipe(catchError(this.errorHandler));
    }

    getAllOrders(user_id : number) : Observable<Array<Order>> {
        return this.http.get(`${this.api}/orders/${user_id}`)
            .pipe(retry(3))
            .pipe(catchError(this.errorHandler));

    }

    getAllOrdersAdmin() : Observable<Array<Order>> {
        return this.http.get(`${this.api}/orders`)
            .pipe(retry(3))
            .pipe(catchError(this.errorHandler));

    }

    getSingleOrder(order_id : number) : Observable<Order>{
        return this.http.get(`${this.api}/order/${order_id}`)
            .pipe(retry(3))
            .pipe(catchError(this.errorHandler));
    }

    //States
    getSingleState(order_id : number) : Observable<State>{
        return this.http.get(`${this.api}/states/${order_id}`)
            .pipe(retry(3))
            .pipe(catchError(this.errorHandler));
    }

  private errorHandler ( error:Error | any) : Observable<any> {
      return throwError(error);
  }
}
