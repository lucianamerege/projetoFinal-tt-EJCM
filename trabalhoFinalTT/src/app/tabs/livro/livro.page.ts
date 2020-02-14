import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LivroService } from '../../services/livro.service';
import { ToastController } from '@ionic/angular'

@Component({
    selector: 'app-livro',
    templateUrl: './livro.page.html',
    styleUrls: ['./livro.page.scss'],
})
export class LivroPage implements OnInit {
  livroId;
  livro;
  userId;
  sameUser;

  constructor(public ToastController: ToastController, public Router: Router, public route: ActivatedRoute, public LivroService: LivroService) {
    this.livroId = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.livroId);
    this.showLivro(this.livroId);
  }
  
  showLivro(id):any{
		this.LivroService.showLivro(id).subscribe(
      (res) => {
			  this.livro = res[0];
			  console.log(res[0])
		})
  }
  compraLivro(id:number){
    console.log(id);
    this.LivroService.compraLivro(id).subscribe(
      ( res ) => {
        console.log("Compra efetuada");
        return this.Router.navigate(['historico']);
      }
    )
  }
  async presentToast() {
    const toast = await this.ToastController.create({
      message: "Livro comprado e adicionado ao seu histórico",
      duration: 2000
    })
    toast.present();
  }
  editaLivro(id) {
    console.log('clicou');
    //this.router.navigate[('/editarLivro')];
}

  ionViewWillEnter() {
    this.userId = localStorage.getItem('userId');
}

  //checa se o usuário e o vendedor são a mesma pessoa
  userCheck() {
    if (this.userId == this.livro.vendedor_id) {
        this.sameUser = true;
    } else {
        this.sameUser = false;
    }
}
  ngOnInit() {
    
  }

}
