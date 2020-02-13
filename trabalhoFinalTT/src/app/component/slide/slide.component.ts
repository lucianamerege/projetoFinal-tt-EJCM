import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
})
export class SlideComponent implements OnInit {
    @Input() slideInfo;
    @Output()slideClicked = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
      console.log(this.slideInfo);
  }



}
