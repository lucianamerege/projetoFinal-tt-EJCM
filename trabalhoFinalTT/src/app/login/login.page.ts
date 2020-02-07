import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  registerForm: FormGroup;

  constructor(private router: Router, public formbuilder: FormBuilder) {
    this.registerForm = this.formbuilder.group({
      email:[null, [Validators.required, Validators.email]],
      password:[null,[Validators.required, Validators.minLength(5)]]
    });
   }

  ngOnInit() {
  }

  submitForm(form){
    console.log(form.value);
  }

  cadastro(){
    this.router.navigate(['/cadastro']);
  }

  login(){
    this.router.navigate(['/tabs/tab1']);
  }

}