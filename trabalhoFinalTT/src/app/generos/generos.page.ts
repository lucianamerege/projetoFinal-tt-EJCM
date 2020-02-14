import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LivroService } from '../services/livro.service';

@Component({
  selector: 'app-generos',
  templateUrl: './generos.page.html',
  styleUrls: ['./generos.page.scss'],
})
export class GenerosPage implements OnInit {

  userId;
  generoForm: FormGroup;

  constructor(public Router: Router, public formbuilder: FormBuilder, public livroService: LivroService) {
    this.generoForm = this.formbuilder.group({
      genero: [null],
    });
    this.userId = localStorage.getItem('userId');
  }

  ngOnInit() {
  }
  ionViewWillEnter(){
    
  }

  updateGenero(generoForm, userId){
    console.log(generoForm);
    this.livroService.updateGenero(generoForm.value, this.userId).subscribe(
      (res) => {
        console.log(res);
        this.Router.navigate(['/tabs/tab1']);
      }
    )
  }

}
