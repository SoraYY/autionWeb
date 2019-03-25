import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit,OnChanges {

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(){
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }
  }

  private stars: boolean[];

  @Input()
  private readOnly:boolean = true;

  @Input()
  private rating: number = 0;

  @Output()
  private ratingChange: EventEmitter<number> = new EventEmitter();

  private starClick(index: number){
    if(this.readOnly){
      return;
    }
    this.rating = index + 1;
    this.ratingChange.emit(this.rating);
  }

}
