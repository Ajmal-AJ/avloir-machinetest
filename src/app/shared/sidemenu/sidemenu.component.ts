import { LayoutService } from './../../core/services/layout.service';
import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [RouterModule,RouterLink,CommonModule],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.scss'
})
export class SidemenuComponent {
  constructor(public authService: AuthService, public layoutService:LayoutService){}
}
