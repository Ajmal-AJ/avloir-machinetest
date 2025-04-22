import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';
import { SidemenuComponent } from '../../sidemenu/sidemenu.component';

@Component({
  selector: 'app-user-layout',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,SidemenuComponent],
  templateUrl: './user-layout.component.html',
  styleUrl: './user-layout.component.scss'
})
export class UserLayoutComponent {

}
