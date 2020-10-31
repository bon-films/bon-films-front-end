import { Film } from './film';

export interface Review {
    id: number;
    rating: number;
    review: String;
    userReviewedId: String;
    title: String
    dateReviewed: Date;
}
