import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/Common/login.service';
import { usersViewModel } from 'src/app/ui-models/user-view-model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( private loginService:LoginService,private router:Router) { }
usersVM:usersViewModel=new usersViewModel()
confirmPassword:any;
  registerUser(signUpFormForm: NgForm) {
    this.usersVM.formSubmitted = true;
    try {
      if (signUpFormForm.invalid) {
        alert("Fill All Required Fields")
        return;
      }

        this.usersVM.usersObj.role="user"
        this.loginService.registerUser(this.usersVM.usersObj).subscribe(
          (response) => {
            alert("User registered successfully")
            console.log('User registered successfully', response);
             this.router.navigate(['/login'])
            // Handle success, e.g., display a success message or redirect to another page
          },
          (error) => {
            console.error('Registration error', error);
            // Handle registration error, e.g., display an error message
          }
        );
      } catch (error) {
        console.error('Registration error', error);
      }

  }
  ngOnInit(): void {
  }

  async togglePassword() {
    this.usersVM.hide = !this.usersVM.hide;
    if (this.usersVM.eyeDefault == "default") {
      this.usersVM.eyeDefault = "eyeChange";
    } else {
      this.usersVM.eyeDefault = "default";
    }
    return;
  }
}
