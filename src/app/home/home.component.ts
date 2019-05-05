import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-home',
  template: `
    <img src="../assets/images/hero.jpg" class="ui image center-block">
    <h1>
      Wilkommen im Bookstore19 <br/> 
    </h1>
    <h2>Jakob Bechinie - s1510456001</h2>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
