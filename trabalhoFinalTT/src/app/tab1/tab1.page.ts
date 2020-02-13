import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
//import { AvaliacaoService } from '..services/avaliacao.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
    user
    userId;
    constructor(public authService: AuthService, public route: ActivatedRoute ) {
        this.userId = this.route.snapshot.paramMap.get('id');


    }

    slides: any[] = [{ foto: "", titulo: "" }, { foto: "", titulo: "" }, { foto: "", titulo: "" }, { foto: "", titulo: "" }];
    avaliacoes: any[] = [{ avatar: "", user: "" }, { avatar: "", user: "" }, { avatar: "", user: "" }, { avatar: "", user: "" }];

    ofertasUsuario() {

    }

}
