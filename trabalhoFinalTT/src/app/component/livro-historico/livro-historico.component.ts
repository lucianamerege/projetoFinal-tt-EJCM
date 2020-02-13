import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LivroService} from '../../services/livro.service'

@Component({
  selector: 'app-livro-historico',
  templateUrl: './livro-historico.component.html',
  styleUrls: ['./livro-historico.component.scss'],
})
export class LivroHistoricoComponent implements OnInit {

  livros: any[]

  constructor(public router:Router, public LivroService: LivroService) {
    this.ListaLivro();
  }

  ngOnInit() {}

  avaliar(){
    this.router.navigate(['/avaliacao']);
  }
  ListaLivro():any{
		this.LivroService.listaLivro().subscribe(
      (res) => {
			  this.livros = res;
			  console.log(res)
		})
	}

}
