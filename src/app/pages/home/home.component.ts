import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../core/services/home.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  implements OnInit {

  exchangeDataList :any= [];
  casinosList :any = [];
  gameProviders: any =[];

  constructor(private homeService : HomeService) {}


  ngOnInit(): void {
    this.getexchangeData();
    this.getCasinosData();
    this.getGameproviders();
  }


  getexchangeData() {
    this.homeService.getExchangeData().subscribe({
      next: (response) => {
          this.exchangeDataList =response.exchangeData;
      },
      error : (err) => {
          console.log(err);
      },
      complete: () => {
          console.log("Data Fetching Completed");
      },
    })
  };

  getCasinosData(){
    this.homeService.getCasinosData().subscribe({
      next: (response) =>{
        this.casinosList =response.casinos;
      },
      error :(err)=> {
        console.log(err);
      },
      complete :()=> {
        console.log("Data Fetching Completed");
      },
    })
  }


  getGameproviders(){
    this.homeService.getGameProviders().subscribe({
      next: (response) =>{
        this.gameProviders = response.gameProviders.filter((data :{ isHome: boolean })=> data.isHome === true);
        console.log(this.gameProviders)
      },
      error :(err)=> {
        console.log(err);
      },
      complete :()=> {
        console.log("Data Fetching Completed");
      },
    })
  }



}
