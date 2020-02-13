import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LivroService } from '../services/livro.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page  {
 
	
  constructor(private router: Router, public LivroService:LivroService) {
    
  }
  
  praOferta(){
    this.router.navigate(['/tabs/oferta']);
  }
  isActive(): boolean{

    let data = localStorage.getItem('userToken');
    if( data )
      return false;
    else
      return true;
  }

}
