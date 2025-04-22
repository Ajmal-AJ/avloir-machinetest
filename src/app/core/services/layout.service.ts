import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  isMobile = false;
  isSidemenuOpen =false;


  constructor() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize.bind(this));
  }

  toggleSidemenu(){
    this.isSidemenuOpen =!this.isSidemenuOpen
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 992;
  }

}
