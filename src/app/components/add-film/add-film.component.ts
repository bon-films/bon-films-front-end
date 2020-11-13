import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Film } from 'src/app/models/film';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.scss']
})
export class AddFilmComponent implements OnInit {

  addFilmForm: FormGroup;

  constructor(
    public bsModalRef: BsModalRef,
    private router: Router,
    private fb: FormBuilder,
  ) { }

  ngOnInit(
  ) {
    this.addFilmForm = this.fb.group({
      filmTitle: ['', [Validators.required]],
      genre: ['', [Validators.required]],
      studio: ['', [Validators.required]],
      director: ['', [Validators.required]],
      topBilling: ['', [Validators.required]],
      synopsis: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.hideModalAndReloadComponent();
  }

  hideModalAndReloadComponent() {
    console.log(this.addFilmForm);
    this.bsModalRef.hide();
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigateByUrl('/create-review');
  }

  get filmTitle() {
    return this.addFilmForm.get("filmTitle");
  }

  get genre() {
    return this.addFilmForm.get("genre");
  }

  get studio() {
    return this.addFilmForm.get("studio");
  }

  get director() {
    return this.addFilmForm.get("director");
  }

  get topBilling() {
    return this.addFilmForm.get("topBilling");
  }

  get synopsis() {
    return this.addFilmForm.get("synopsis");
  }

}
