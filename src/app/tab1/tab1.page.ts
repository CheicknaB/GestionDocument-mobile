import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../shared/services/document.service';
import { Document } from '../shared/models/document';
//import { FactureDto } from '../shared/models/factureDTO';
import { environment } from 'src/environments/environment';
import { Recu } from '../shared/models/recu';
import { Paiement } from '../shared/models/paiement';
import { User } from '../shared/models/user';
import { AuthentificationService } from '../shared/services/authentification.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  currentPage = "liste";
  currentUser : User;
  typesDocuments : any;
  factures: any;
  fournisseurs : any;
  fichier : any;
  extension : any;
  liste : any;
  document! : Document;
  factureAPayer! : any;
  urlFichiers! : any;
  recu! : Recu;
  paiement!: Paiement;

  constructor(
    private documentService : DocumentService,
    private authService : AuthentificationService
  ) {this.currentUser = this.authService.utilisateur;}

  ngOnInit(): void {

    this.document = new Document();
    this.urlFichiers = environment.urlFichiers;
    this.recu = new Recu();
    this.paiement = new Paiement();

    this.getDocuments();

    this.getUserFactures(this.currentUser.id);

    this.initialiser();
    this.currentUser = this.authService.utilisateur;
  }

  hasRole(roleName: string): boolean {
    return this.currentUser.roles.some((role: any) => role.libelle === roleName);
  }

  handleAddDocument(){
    if(this.document.type === "facture"){
     this.addFacture();   
    } else{
      this.addRecu();
    }
  }

  addRecu(){
    this.recu.image = this.fichier;
    this.recu.extension = this.extension

    this.paiement.montant = this.document.montantTotal
    this.paiement.recu = this.recu
    this.paiement.facture = this.factureAPayer

    console.log("recu dans paiement ", this.paiement)

    this.documentService.addRecu(this.paiement).subscribe({
      next:(data:any) =>{
        console.log("Paiement effectué avec succès !"+data)
        this.currentPage = 'liste'
      },
      error: (error: any) => {
        console.log("erreur lors de l\'ajout du paiement "+JSON.stringify(error.error));
      }
    })

  }

  addFacture(){
    console.log("===== AJOUT D\'UN DOCUMENT =======");

    this.document.base64Image = this.fichier;
    this.document.extension = this.extension;

    this.documentService

    this.documentService.addDocument(this.document).subscribe({
      next:(data:any) =>{
        this.document = data;
        this.document.utilisateur = this.currentUser
        this.liste.push(this.document);
          console.log("Ajout du document effectué avec succès !"+JSON.stringify(this.document))
        this.currentPage = 'liste'
      },
      error: (error: any) => {
        console.log("erreur lors de l\'ajout du document "+JSON.stringify(error.error));
      }
    })
  }

  getDocuments(){
    console.log("===== LISTE DES DOCUMENTS =======");
    this.documentService.getDocuments().subscribe({
      next:(data:any) =>{
        this.liste = data;
        console.log("recupération des documents effectuée avec succès ! "+JSON.stringify(this.liste))
      },
      error: (error: any) => {
        console.log("erreur lors de la récupération des documents "+JSON.stringify(error.error));
      }
    })
  }

  getUserFactures(userId : number){
    console.log(" Liste des factures non validées de l'utilisateur ")
    this.documentService.getUserFactures(userId).subscribe({
      next:(data) => {
        console.log("recupération des factures en cours de paiement de l'utilisateur ", data)
        this.factures = data
      },
      error: (error) => {
        console.log("erreur lors de la recupération des factures en cours de paiement de l'utilisateur ", error.error)
      }
    })
  }

  
  initialiser(){
    this.typesDocuments = ["facture","reçu"];
    this.fournisseurs = [
      {id:1, contact:"contact1", libelle:"fournisseur1"},
      {id:2, contact:"contact1", libelle:"fournisseur2"},
    ]
  }

  // convertFileToBase64(file: File): Promise<string> {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       // Extraire les données Base64 de l'URL de données
  //       const base64String = (reader.result as string).split(',')[1];
  //       // Résolvez la promesse avec la chaîne Base64 extraite
  //       resolve(base64String);
  //     };
  //     reader.onerror = (error) => {
  //       // En cas d'erreur, rejetez la promesse avec l'erreur
  //       reject(error);
  //     };
  //     // Commencez la lecture du fichier en tant que data URL (base64)
  //     reader.readAsDataURL(file);
  //   });
  // }
  
  convertFileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = btoa(reader.result as string);
        resolve(base64String);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsBinaryString(file);
    });
  }
  

// Fonction appelée lors de la sélection d'un fichier
async onFileSelected(event: any) {
  const file: File = event.target.files[0];
  try {
    // Appelez la fonction pour convertir le fichier en base64 et attendez la résolution de la promesse
    this.fichier = await this.convertFileToBase64(file);
    console.log("fichier après conversion", this.fichier)
    this.extension = file.name.split('.').pop();
    console.log("fichier =====> ", this.fichier);
    console.log("extension =====> ", this.extension);
  } catch (error) {
    console.error("Une erreur s'est produite lors de la conversion du fichier en base64 : ", error);
  }
}


  
 
}
