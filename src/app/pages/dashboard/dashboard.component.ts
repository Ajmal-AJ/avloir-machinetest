import { CommonModule } from '@angular/common';
import { HomeService } from './../../core/services/home.service';
import { Component, OnInit } from '@angular/core';
import { SportsListComponent } from '../../shared/sports-list/sports-list.component';
import { DashboardService } from '../../core/services/dashboard.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,SportsListComponent,RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  isVisible =true;
  gameProviders: any = [];
  sportsCatgories :any = [];
  GreyhoundRacing: any =[];
  horseRacingData :any =[];
  selectedCategoryId: string = '';
  sportsMatches: { [key: string]: any[] } = {};

  constructor(private homeService: HomeService, private dashboardService :DashboardService ) {}


  ngOnInit(): void {
    this.getGameProviders();
    this.getSportsCategories();
    this.getSportsData();
    this.getGreyhoundRacingData();
    this.getHorseRacingData();
  }

  getGameProviders() {
    this.homeService.getGameProviders().subscribe({
      next: (response) => {
        this.gameProviders = response.gameProviders;
      },
      error: (err) => {
        console.error('Error fetching gameproviders  data:', err);
      },
      complete: () => {
        console.log('Data fetching completed');
      }
    })
  }

  getSportsCategories() {
    this.dashboardService.getsportsCatogories().subscribe({
      next: (response) => {
        this.sportsCatgories = response.categories;
      },
      error: (err) => {
        console.error('Error fetching sports categories  data:', err);
      },
      complete: () => {
        console.log('Data fetching completed');
      }
    })
  }


  getSportsData() {
    this.dashboardService.getSportsData().subscribe({
      next: (response) => {
        this.sportsMatches = response;
      },
       error: (err) => {
        console.error('Error fetching sportsMatches  data:', err);
      },
      complete: () => {
        console.log('Data fetching completed');
      }
    })
  }


  getGreyhoundRacingData() {
    this.dashboardService.getGreyhoundRacingData().subscribe({
      next:(response)=> {
        this.GreyhoundRacing= response.nextGreyhoundRacing
      },
      error: (err) => {
        console.error('Error fetching Greyhound Racing data:', err);
      },
      complete: () => {
        console.log('Data fetching completed');
      }
    })
  }


  getHorseRacingData() {
    this.dashboardService.getHorseRacingData().subscribe({
      next:(response)=> {
        this.horseRacingData= response.horseRacing
      },
      error: (err) => {
        console.error('Error fetching Greyhound Racing data:', err);
      },
      complete: () => {
        console.log('Data fetching completed');
      }
    })
  }


  showCategoryData(selectedCatgory: string) {
    if (selectedCatgory === 'inplay' || selectedCatgory === 'featured') {
      this.isVisible = true;
    } else {
      this.isVisible = false;
      this.selectedCategoryId = selectedCatgory;
    }
  }


}
