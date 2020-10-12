import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/firebase/auth.service';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  faGoogle = faGoogle;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  onSubmit(): void {
    this.authService.SignIn(this.loginForm.get('email').value, this.loginForm.get('password').value);
  }

  onGoogleClick(): void {
    this.authService.GoogleAuth();
  }

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

}
