import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/Common/login.service';
import { CommonServiceService } from './services/Common/common-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'loans-ui';
  isSidebarVisible: boolean = true;
  loggedIn: boolean = false;
  isAdmin: boolean = false; // Add isAdmin flag

  constructor(
    public commonService: CommonServiceService,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    // Check if the user is already logged in
    const token = sessionStorage.getItem('token');
    if (token) {
      this.commonService.layoutVM.loggedIn=true
      // Get the user's role from the token in localStorage
      const tokenPayload = JSON.parse(atob(token.split('.')[1])); // Decode the token payload
      if(tokenPayload.role === 'admin'){
        this.commonService.layoutVM.isAdmin=true
        this.commonService.layoutVM.isUser=false;
        this.commonService.layoutVM.toogleWrapper="wrapper"

      }
      else{
        this.commonService.layoutVM.isAdmin=false;
        this.commonService.layoutVM.isUser=true;
        this.commonService.layoutVM.toogleWrapper=" "
        // window.location.reload();
      }
      // this.isAdmin = tokenPayload.role === 'admin';
    }
  }

  // Add a method to handle logout
  logout() {
    this.loginService.logout(); // Implement the logout method in your LoginService
    this.loggedIn = false;
    this.isAdmin = false;
    this.router.navigate(['/login']);
    localStorage.removeItem('token');
  }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
}
