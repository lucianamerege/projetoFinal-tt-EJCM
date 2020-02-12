import { Component, OnInit } from '@angular/core';
import { ProtractorExpectedConditions } from 'protractor';
import {AuthService} from '../../services/auth.service'

@Component({
  selector: 'app-livro-home',
  templateUrl: './livro-home.component.html',
  styleUrls: ['./livro-home.component.scss'],
})
export class LivroHomeComponent implements OnInit {

  dadosLivro;
  nomeLivro;
  
  constructor(public AuthService: AuthService) { 
  
  }

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
    {
      name: "Dom Quixote"
    },
    {
      name: "Orfanato da senhorita Peregrine para Crianças Peculiares"
    },
    {
      name: "O Castelo das Águias"
    },
    {
      name: "Box O Senhor dos Anéis"
    },

  ]

  getInfo(id){
    this.AuthService.getLivro(id).subscribe(
      (res) => {
        this.dadosLivro=res;
        console.log(this.dadosLivro);
        this.nomeLivro=this.dadosLivro.nomeLivro;
      }
    )
  };
}
