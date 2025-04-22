import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

    isLogin =false;
    loginError = false;
    @Output() loginSuccess = new EventEmitter<void>();

    loginForm: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, ]],
      password: ['', [Validators.required,]],
      rememberMe: [false]
    });
  }

  onLogin() {
    const { username, password } = this.loginForm.value;
    this.auth.login(username!, password!).subscribe(success => {
      if (success) {
        this.loginSuccess.emit();
        this.router.navigateByUrl('/dashboard');
        this.loginError = false;
      } else {
        this.loginError = true;
      }
    });
  }

  clearError() {
    this.loginError = false;
  }
}
