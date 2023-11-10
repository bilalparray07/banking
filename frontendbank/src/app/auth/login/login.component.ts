import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/Common/login.service';
import { CommonServiceService } from 'src/app/services/Common/common-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  selectedRole: string ='';
  constructor(private loginService:LoginService,private router:Router,private commonService:CommonServiceService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    // Call the login service with the provided username, password, and role
    this.loginService.login(this.username, this.password, this.selectedRole)
      .subscribe(response => {
        // Handle the login response
        console.log('Login successful', response);

        // Check if the login response contains a token
        if (response.token) {
        //   // Store the token in localStorage
          sessionStorage.setItem('token', response.token);
  
          // Check the user's role from the response
          const role = response.role;
  
          // Navigate to the respective dashboard based on the user's role
          if (role === 'user') {
            this.commonService.layoutVM.isAdmin=false;
            this.commonService.layoutVM.isUser=true;
            this.router.navigate(['/home']); // Redirect to the user dashboard
          } else if (role === 'admin') {
           this.commonService.layoutVM.isAdmin=true;
           this.commonService.layoutVM.isUser=false;
            this.router.navigate(['/admin']); // Redirect to the admin dashboard
          // }
        } else {
          // Handle the case where the response does not contain a token
          console.error('Login failed: Token not found in response');
        }}
      }, error => {
        // Handle login error (e.g., display an error message)
        console.error('Login failed', error);
      });
  }


}
