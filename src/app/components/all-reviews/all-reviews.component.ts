import { Component, OnInit } from '@angular/core';
import { Review } from 'src/app/common/review';
import { ReviewService } from 'src/app/services/review/review.service';

@Component({
  selector: 'app-all-reviews',
  templateUrl: './all-reviews.component.html',
  styleUrls: ['./all-reviews.component.scss']
})
export class AllReviewsComponent implements OnInit {
  reviews: Review[];

  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.getAllReviews();
  }

  getAllReviews() {
    this.reviewService.getAllReviews().subscribe(
      data => {
        this.reviews = data;
      }
    );
  }
}
