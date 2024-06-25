import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private user: string = "";
  private password: string = "";

  login(username: string, password: string) {
      this.user = username;
      this.password = password
      if(this.user !== "" && this.password !== ""){
        this.isAuthenticated = true;
      }else{
        this.isAuthenticated = false;
      }
    }

  logout(): void {
    this.isAuthenticated = false;
    this.user = "";
    this.password = "";
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  getUser(): any {
    return this.user;
  }

  updateUserName(username: string) {
    if (this.isAuthenticated) {
      this.user = username;
    }
  }
}