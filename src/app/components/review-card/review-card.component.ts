import { Component, Input } from '@angular/core';
import { ReviewResponse } from 'src/app/models/review';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.css'],
})
export class ReviewCardComponent {
  @Input() review!: ReviewResponse;
  constructor() {}
}
