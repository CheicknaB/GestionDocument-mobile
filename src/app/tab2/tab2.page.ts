import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user';
import { AuthentificationService } from '../shared/services/authentification.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  
  liste : any;
  currentUser : User;
  constructor(private authService : AuthentificationService) {
    this.currentUser = this.authService.utilisateur;
  }

  ngOnInit(): void {
    this.currentUser = this.authService.utilisateur;
    this.chargerListe();
  }

  hasRole(roleName: string): boolean {
    return this.currentUser.roles.some((role: any) => role.libelle === roleName);
  }

  chargerListe(){
    this.liste = [
      {date:"28/09/2024", nom:"achat N°1", fournisseur:"fournisseur1"},
      {date:"29/09/2024", nom:"achat N°2", fournisseur:"fournisseur2"},
      {date:"30/09/2024", nom:"achat N°3", fournisseur:"fournisseur3"},
      {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4"},
      {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4"},
      {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4"},
      {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4"},
      {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4"},
      {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4"},
      {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4"},
      {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4"},
      {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4"},
      {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4"},
      {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4"},
      {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4"},
      {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4"},
      {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4"},
      {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4"},
      {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4"},
      {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4"},
      {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4"},
      {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4"},
      {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4"},
      {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4"},
      {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4"},
      {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4"},
      {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4"},
    ]
  }

}
