import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common";
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private router: Router, private location: Location, public authService: AuthService) {}

  voltarPaginaAnterior(){
    this.location.back();
  }

  logout() {
    this.authService.logout().subscribe(
      (res) => {
        console.log( 'Logout realizado' );
        localStorage.removeItem('userToken');
        this.router.navigate(['/tabs/tab1']);
      }
    );
  }

}
