import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from '../../../login/login.component';
import { FooterComponent } from '../../footer/footer.component';
import { HeaderComponent } from '../../header/header.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';
import { SidemenuComponent } from '../../sidemenu/sidemenu.component';

@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [RouterOutlet,LoginComponent, FooterComponent, CommonModule],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.scss'
})
export class HomeLayoutComponent {
  loggedIn$ = this.auth.loggedIn$;

  constructor(public auth: AuthService) {}




}
