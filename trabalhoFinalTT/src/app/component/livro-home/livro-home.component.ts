import { Component, OnInit } from '@angular/core';
import { ProtractorExpectedConditions } from 'protractor';

@Component({
  selector: 'app-livro-home',
  templateUrl: './livro-home.component.html',
  styleUrls: ['./livro-home.component.scss'],
})
export class LivroHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  name:string;

  livros:object[] = [
    {
      name: "Harry Potter",
    },
    {
      name: "Mágico de Oz"
    },
    {
      name: "Alice"
    },
    {
      name: "Pjo"
    },
  ]
}
