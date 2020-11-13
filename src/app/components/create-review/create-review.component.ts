import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { Film } from 'src/app/models/film';
import { FilmService } from 'src/app/services/film/film.service';
import { AddFilmComponent } from '../add-film/add-film.component';

@Component({
  selector: 'app-create-review',
  templateUrl: './create-review.component.html',
  styleUrls: ['./create-review.component.scss']
})
export class CreateReviewComponent implements OnInit {
  bsModalRef: BsModalRef;

  films: Film[];

  createReviewForm: FormGroup;

  constructor(
    private filmService: FilmService,
    private modalService: BsModalService,
    private fb: FormBuilder,
  ) { }


  ngOnInit(): void {
    this.getAllFilms();
    this.createReviewForm = this.fb.group({
      film: ['', [Validators.required]],
      rating: ['', [Validators.required]],
      review: ['', [Validators.required]],
    });
  }

  openAddFilmModal() {
    const initialState = {
      title: 'Add a New Film'
    };
    this.bsModalRef = this.modalService.show(AddFilmComponent, { initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  onSubmit() {
    //alert(this.film.value);
    alert(JSON.stringify(this.createReviewForm.value));
  }

  getAllFilms() {
    this.filmService.getAllFilms().subscribe(
      data => {
        this.films = data;
      }
    )
  }

  get film() {
    return this.createReviewForm.get("film");
  }

  get rating() {
    return this.createReviewForm.get("rating");
  }

  get review() {
    return this.createReviewForm.get("review");
  }

}
