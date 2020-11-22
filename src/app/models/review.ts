import {Film} from './film';

export interface Review {
  id: number;
  rating: number;
  review: string;
  userReviewedId: string;
  film: Film;
  dateReviewed: Date;
}
