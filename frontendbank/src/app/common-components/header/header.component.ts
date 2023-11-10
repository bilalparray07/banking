import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/Common/login.service';
import { CommonServiceService } from 'src/app/services/Common/common-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedIn:boolean=false;
  isAdmin:boolean=false;
  constructor(
    public commonService: CommonServiceService,
    private loginService:LoginService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }


  toggleMenu() {
    if (this.commonService.layoutVM.toggleSideMenu == 'default') {
      this.commonService.layoutVM.toggleSideMenu = 'active';
      this.commonService.layoutVM.toogleWrapper = 'toggleWrapper';
    } else {
      this.commonService.layoutVM.toggleSideMenu = 'default';
      this.commonService.layoutVM.toogleWrapper = 'wrapper';
    }
    return;
  }
  // Add a method to handle logout
  logout() {
    this.loginService.logout(); // Implement the logout method in your LoginService
    this.commonService.layoutVM.loggedIn=false
    this.commonService.layoutVM.isAdmin=false
    this.router.navigate(['/login']);
    sessionStorage.clear()
  }

}
