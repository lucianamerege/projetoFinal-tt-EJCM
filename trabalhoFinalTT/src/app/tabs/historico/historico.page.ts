import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-historico',
  templateUrl: './historico.page.html',
  styleUrls: ['./historico.page.scss'],
})
export class HistoricoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  voltarPaginaAnterior(){
    this.router.navigate(['tabs/tab3']);
  }
}
