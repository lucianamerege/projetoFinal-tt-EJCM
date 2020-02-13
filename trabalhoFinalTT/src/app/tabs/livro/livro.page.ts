import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LivroService } from '../../services/livro.service';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.page.html',
  styleUrls: ['./livro.page.scss'],
})
export class LivroPage implements OnInit {
  livroId;
  livro;

  constructor(public route: ActivatedRoute, public LivroService: LivroService) {
    this.livroId = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.livroId);
    this.showLivro(this.livroId);
  }
  
  showLivro(id):any{
    console.log("entrou");
		this.LivroService.showLivro(id).subscribe(
      (res) => {
			  this.livro = res[0];
			  console.log(res[0])
		})
  }
  ionViewWillEnter(){}
  ngOnInit() {
    
  }

}
