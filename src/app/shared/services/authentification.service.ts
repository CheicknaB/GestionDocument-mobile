import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SignUpRequest } from '../models/SignUpRequest';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private apiUrl = environment.apiUrl;
  private signUpRequest = new SignUpRequest();

  
  utilisateur! : User;
  accessToken! : string;
  isAuthenticated: boolean = false;

  constructor(private http : HttpClient) { }

  public login (email : string, password : string){
    let options = {
      headers : new HttpHeaders().set("Content-Type","application/json")
    }
    let params = new HttpParams()
      .set("email", email)
      .set("password", password);
    this.signUpRequest.email = email
    this.signUpRequest.password = password
    return this.http.post(this.apiUrl+"/no_token/auth/login", this.signUpRequest, options)
  }

  loadProfile(data : any){
    this.accessToken = data.token
    this.utilisateur = data.user
    this.isAuthenticated = true
  }

 
  
}
