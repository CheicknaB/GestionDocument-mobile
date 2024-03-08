import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';
import { AuthentificationService } from './authentification.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient,
    private authService : AuthentificationService) {}

  getUsers():any {
      let options = {
        headers : new HttpHeaders().set("Authorization","Bearer "+this.authService.accessToken)
                                  .set("Content-Type","application/json")
      }
    return this.http.get(this.apiUrl+"/users/find", options);
  }

  getRoles():any {
    let options = {
      headers : new HttpHeaders().set("Authorization","Bearer "+this.authService.accessToken)
                                .set("Content-Type","application/json")
    }
    return this.http.get(this.apiUrl+"/users/roles", options);
  }

  getUserById(userId: number): Observable<User> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.get<User>(url); 
  }

  addUser(user: any): any {
    return this.http.post(this.apiUrl+"/users/save", user);
  }

  updateUser(user: User): Observable<User> {
    const url = `${this.apiUrl}/${user.id}`;
    return this.http.put<User>(url, user);
  }

  deleteUser(userId: number): Observable<void> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.delete<void>(url);
  }
}
