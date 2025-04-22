import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sports-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './sports-list.component.html',
  styleUrl: './sports-list.component.scss'
})
export class SportsListComponent  implements OnInit {

  @Input() title: string = '';
  @Input() icon: string = '';
  @Input() id: string = '';
  @Input() matches: any[] = [];
  filteredMatches: any[] = [];
  liveChecked : boolean= false;
  virtualChecked : boolean= false;
  isCollapsed: boolean = true; // true = open initially

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit(): void {
    this.filteredMatches = this.matches;
  }



  filterMatches() {
    if (!this.liveChecked && !this.virtualChecked) {
      this.filteredMatches = this.matches; // show all
      return;
    }

    this.filteredMatches = this.matches.filter(item => {
      const live = this.liveChecked && item.status === 'Live';
      const virtual = this.virtualChecked && item.virtual;

      return live || virtual;
    });
  }

}
