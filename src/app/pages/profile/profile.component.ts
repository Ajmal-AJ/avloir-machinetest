import { Component, OnInit } from '@angular/core';
import { ProfileService, } from '../../core/services/profile.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {


  passwordForm!: FormGroup;

  username: string = '';
  name: string = '';
  constructor(private fb: FormBuilder, private profileService: ProfileService, private authService :AuthService) {}

  ngOnInit(): void {
   // for API integration
    // this.profileService.getProfile().subscribe(data => {
    //   this.profile = data;
    // });

    this.passwordForm = this.fb.group({
      old_password: ['', [Validators.required]],
      new_password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/)
      ]],
      new_password_re: ['', [Validators.required]]


    }, { validators: this.passwordsMatchValidator });


    this.getUserData();


  }


  getUserData() {
    const token = this.authService.getToken();
    const user = this.authService.getUserByToken(token);
    if (user) {
      this.username = user.username;
      this.name = user.name;
    } else {
      this.username = 'Demo';
      this.name = 'Demo123';
    }
  }



  passwordsMatchValidator(form: FormGroup) {
    const newPassword = form.get('new_password')?.value;
    const confirmPassword = form.get('new_password_re')?.value;
    return newPassword === confirmPassword ? null : { passwordMismatch: true };
  }

  updatePassword(): void {
    if (this.passwordForm.invalid) {
      this.passwordForm.markAllAsTouched();
      return;
    }

    this.profileService.changePassword(this.passwordForm.value).subscribe({
      next: () => alert('Password updated successfully'),
      error: err => alert('Failed to update password: ' + err.error?.message)
    });
  }

}
