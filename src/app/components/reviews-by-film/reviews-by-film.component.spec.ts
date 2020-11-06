import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsByFilmComponent } from './reviews-by-film.component';

describe('ReviewsByFilmComponent', () => {
  let component: ReviewsByFilmComponent;
  let fixture: ComponentFixture<ReviewsByFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewsByFilmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsByFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
