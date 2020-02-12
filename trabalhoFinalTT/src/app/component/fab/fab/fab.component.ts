import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss'],
})
export class FabComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

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
