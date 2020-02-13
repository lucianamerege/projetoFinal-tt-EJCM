import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
//import { AvaliacaoService } from '..services/avaliacao.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  {

  constructor(public service: AuthService) {
    
  }

    slides: any[] = [{ foto: "", titulo: "" }, { foto: "", titulo: "" }, { foto: "", titulo: "" }, { foto: "", titulo: "" }];
    avaliacoes: any[] = [{ avatar: "", user: "" }, { avatar: "", user: "" }, { avatar: "", user: "" }, { avatar: "", user: "" }];

}
