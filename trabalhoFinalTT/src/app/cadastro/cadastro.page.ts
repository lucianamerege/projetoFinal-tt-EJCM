import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastController } from '@ionic/angular'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  registerForm: FormGroup;

  constructor(public ToastController: ToastController, public AuthService: AuthService, public formbuilder: FormBuilder, private router: Router) {
    this.registerForm = this.formbuilder.group({
      name: [null, [Validators.required, Validators.minLength(8)]],
      email:[null, [Validators.required, Validators.email]],
      password:[null,[Validators.required, Validators.minLength(5)]],
      passwordConfirm:[null,[Validators.required]]
    });
  }

  ngOnInit() {
  }

  registrarUser( registerForm ) {
  
    if ( registerForm.status == "VALID") {

      this.AuthService.registrarUser( registerForm.value ).subscribe(
        ( res ) => {
          console.log( res );
          this.router.navigate(['/login']);
        }
      )
    }
  }
  login(){
    this.router.navigate(['/login']);
  }
  async presentToast() {
    const toast = await this.ToastController.create({
      message: "Usuário cadastrado",
      duration: 2000
    })
    toast.present();
  }

}
