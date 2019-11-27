import { Injectable } from "@angular/core";
import { AdalService } from "adal-angular4";
import { Router } from "@angular/router";

import{environment} from '../../../environments/environment'

import { JwtHelperService } from "@auth0/angular-jwt";


@Injectable({
  providedIn: "root"
})
export class AuthService {
  authToken: string;
  user_name: string;
  constructor(private router: Router, private adalService: AdalService) {}
  //   this.adalService.init(environment.adalConfig);
  //   setInterval(() => {
  //     this.autocheck();
  //   }, 10000);
  // }

  /**
   * method to authenticate for login to Dashboard
   */
  // Login() {

  //   this.adalService.handleWindowCallback();
    
  //   if (this.adalService.userInfo.authenticated) {
      
  //     this.authToken = this.adalService.userInfo.token;
  //     const helper = new JwtHelperService();
  //     const decodedToken = helper.decodeToken(this.authToken);
  //     this.user_name = decodedToken.
  //     debugger
  //     // console.log("DT",this.user_name);
  //     localStorage.setItem("UserName", this.user_name);

  //     // console.log("AuthToken", this.authToken);
  //     // console.log(this.adalService.userInfo.userName);
  //     if (localStorage.getItem("url") !== null) {
  //       this.router.navigate([localStorage.getItem("url")]);
  //       // this._categoryService.selec  ted = localStorage.getItem('dropdown');
  //       localStorage.removeItem("url");
  //     }
  //     this.router.navigate(['/']);
  //     localStorage.setItem("canlogin", "0");
  //   } else {
  //     this.adalService.login();
  //     this.authToken = this.adalService.userInfo.token;
  //     this.router.navigate(["/"]);
  //     localStorage.setItem("canlogin", "0");
  //   }
  // }

  // /**
  //  * method to log the time to generate another session after an hour
  //  */
  // autocheck() {
  //   // converting time in minutes
  //   const helper = new JwtHelperService();
  //   const date = helper.getTokenExpirationDate(this.authToken).toString();
  //   const currentDate = new Date();
  //   const expiaryDate = new Date(date);
  //   const diff = currentDate.getTime() - expiaryDate.getTime();
  //   const minutesLeft =
  //     (-currentDate.getTime() + expiaryDate.getTime()) / (1000 * 60);
  //   // const minutesLeft = 3;
  //   // console.log("Remaining time for session out", minutesLeft, " minutes");
  //   // checking the time left and poping up the message
  //   // if (minutesLeft <= 5) {
  //   //   swal({
  //   //     title: "Your session is about to be timed out!!",
  //   //     text: "Click Ok To create a new session",
  //   //     type: "warning",
  //   //     showCancelButton: true
  //   //     //dangerMode: true,
  //   //   }).then(willDelete => {
  //   //     localStorage.setItem("canlogin", "15");
  //   //   });
  //   //   this.decider(minutesLeft);
  //   // }
  // }

  // /**
  //  * method for checking the conditions
  //  * @param minutesLeft
  //  */
  // decider(minutesLeft) {
  //   // checking the condition of login or logout
  //   if (localStorage.getItem("canlogin") === "15") {
  //     localStorage.setItem("canlogin", "0");
  //     this.adalService.login();
  //     this.authToken = this.adalService.userInfo.token;
  //     // console.log(this.authToken);
  //   } else if (localStorage.getItem("canlogin") === "0" && minutesLeft <= 0) {
  //     this.adalService.logOut();
  //   } else {
  //     // console.log(localStorage.getItem("canlogin"));
  //   }
  // }

  // /**
  //  * method to check for the authentication
  //  */
  // IsAuthenticated() {
  //   return this.authToken != null;
  // }
}
