import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
})
export class SlideComponent implements OnInit {
    @Input() slides;
    /*@Output()slideClicked = new EventEmitter<number>();*/

  constructor() { }

  ngOnInit() {
      console.log(this.slides);
  }



}
