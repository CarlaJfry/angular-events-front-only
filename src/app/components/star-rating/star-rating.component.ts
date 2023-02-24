import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {

  @Input() rating!:number;
  auxRating!:number;

  restoreRating(){
    this.auxRating=this.rating;
  }

  ngOnInit(){
    this.restoreRating();
  }

  @Output() ratingChanged = new EventEmitter<number>();


  setRating() {
    this.ratingChanged.emit(this.auxRating);
  }
}
