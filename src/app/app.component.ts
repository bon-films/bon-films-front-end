import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/firebase/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Comp 586';

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }
}
