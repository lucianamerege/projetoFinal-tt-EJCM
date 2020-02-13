import { Component, OnInit } from '@angular/core';
import { SlideService } from '../services/slide.service';
//import { AvaliacaoService } from '..services/avaliacao.service';


@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {


    constructor(private slideService: SlideService) {


    }


    ngOnInit() {

    }

    slides: any[] = [{ foto: "", titulo: "" }, { foto: "", titulo: "" }, { foto: "", titulo: "" }, { foto: "", titulo: "" }];
    avaliacoes: any[] = [{ avatar: "", user: "" }, { avatar: "", user: "" }, { avatar: "", user: "" }, { avatar: "", user: "" }];

        }
