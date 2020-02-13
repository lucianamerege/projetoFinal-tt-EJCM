import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-list-perfil',
  templateUrl: './list-perfil.page.html',
  styleUrls: ['./list-perfil.page.scss'],
})
export class ListPerfilPage implements OnInit {

  perfis: any[]

  constructor(public AuthService: AuthService) {
    this.listaUser();
   }
   listaUser():any{
		this.AuthService.listaUser().subscribe(
      (res) => {
			  this.perfis = res;
			  console.log(res)
		})
	}
  ngOnInit() {
  }

}
