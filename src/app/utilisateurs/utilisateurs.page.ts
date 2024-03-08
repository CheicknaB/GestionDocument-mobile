import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/models/user'; 
import { AuthentificationService } from '../shared/services/authentification.service';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.page.html',
  styleUrls: ['./utilisateurs.page.scss'],
})
export class UtilisateursPage implements OnInit {
  listeRoles : any;
  listeUtilisateurs : any;
  currentPage : any = "listeUsers";
  donneesServices : any;
  utilisateur! : User  ;
  currentUser : User;

  constructor(
    private userService : UserService,
    private authService : AuthentificationService
  ) { 
    this.currentUser = this.authService.utilisateur;

  }

  ngOnInit() {
    this.utilisateur = new User();
    this.getRoles()
    this.handleGetUsers();
  }

  hasRole(roleName: string): boolean {
    return this.currentUser.roles.some((role: any) => role.libelle === roleName);
  }

  handleGetUsers(){
    this.userService.getUsers().subscribe({
      next:(data : any) => {
        this.listeUtilisateurs = data
        console.log("getUsers from database : ")
      },
      error:(error:any) => {
        console.log("getUsers ====> error : "+JSON.stringify(error.error))
      }
    });
  }

  handleAddUser(){
      console.log("add user method")
      console.log("roles utlisateur ===> "+JSON.stringify(this.utilisateur.roles[0]))
      this.userService.addUser(this.utilisateur).subscribe({
        next:() => {console.log("utilisateur ajouté avec succès !");
        this.listeUtilisateurs.push(this.utilisateur)
        this.currentPage = 'listeUsers';
      }
      })

      
  }

  getRoles(){
    this.userService.getRoles().subscribe({
      next:(data : any) => {
        this.listeRoles = data
        console.log("getRoles from database : ")
      },
      error:(error:any) => {
        console.log("getRoles ====> error : "+JSON.stringify(error.error))
      }
    });
  }


  initialiser(){
    
    this.listeUtilisateurs = [
      {nom:"nom1", prenom:"prenom1",avatar:"assets/images/avatar.png"},
      {nom:"nom1", prenom:"prenom1",avatar:"assets/images/avatar.png"},
      {nom:"nom1", prenom:"prenom1",avatar:"assets/images/avatar.png"},
      {nom:"nom1", prenom:"prenom1",avatar:"assets/images/avatar.png"},
      {nom:"nom1", prenom:"prenom1",avatar:"assets/images/avatar.png"}
    ]
  }
}
