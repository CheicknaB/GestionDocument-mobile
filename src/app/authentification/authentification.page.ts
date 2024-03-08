import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user';
import { AuthentificationService } from '../shared/services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.page.html',
  styleUrls: ['./authentification.page.scss'],
})
export class AuthentificationPage implements OnInit {

  utilisateur! : User;
  accessToken! : string;
  isAuthenticated: boolean = false;

  constructor(private authentificationService : AuthentificationService, private router : Router) { 
    this.utilisateur = new User();
  }

  ngOnInit() {
    console.log("login")
  }

  handleLogin() {
    this.authentificationService.login(this.utilisateur.email, this.utilisateur.password).subscribe({
      next : (data) => {
        this.authentificationService.loadProfile(data)
        console.log("LOGIN -----> connexion effectuée ", data)
        // this.router.navigateByUrl("/tabs")
        this.router.navigate(['/tabs'])
      },
      error: (error) => {
        console.log("Erreur lors du login ", error.error)
      }
    })
  }


 
}
