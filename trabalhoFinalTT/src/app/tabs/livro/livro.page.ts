import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LivroService } from '../../services/livro.service';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.page.html',
  styleUrls: ['./livro.page.scss'],
})
export class LivroPage implements OnInit {

  constructor(public route: ActivatedRoute, public LivroService: LivroService) { }

  ngOnInit() {
  }

}
