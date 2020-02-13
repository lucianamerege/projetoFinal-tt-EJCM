import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { FormControl, ReactiveFormsModule, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.page.html',
  styleUrls: ['./avaliacao.page.scss'],
})
export class AvaliacaoPage implements OnInit {

  registerForm: FormGroup;

  constructor(private location: Location, public AuthService: AuthService, public formbuilder: FormBuilder, private router: Router) {
    this.registerForm = this.formbuilder.group({
      text: [null, [Validators.required, Validators.maxLength(100)]],
    });
  }

  ngOnInit() {
  }
  voltarPaginaAnterior(){
    this.location.back();
  }
  registrarComentario( registerForm ) {
  
    if ( registerForm.status == "VALID") {

      this.AuthService.registrarComentario( registerForm.value ).subscribe(
        ( res ) => {
          console.log( res );
          this.router.navigate(['/tab1']);
        }
      )
    }
  }
}
