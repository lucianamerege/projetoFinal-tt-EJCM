import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  registerForm: FormGroup;

  constructor(public formbuilder: FormBuilder, private router: Router) {
    this.registerForm = this.formbuilder.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      phone: [null, [Validators.required]],
      genre: [null, [Validators.required]],
    });

   }

   submitForm(form) {
     console.log(form);
     console.log(form.value);
   }
  ngOnInit() {
  }

  navegar() {
    this.router.navigate(['/tabs/tab3'])
  }

}
