import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../shared/services/document.service';
import { Document } from '../shared/models/document';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  currentPage = "liste";
  typesDocuments : any;
  fournisseurs : any;
  liste : any;
  document! : Document;

  constructor(
    private documentService : DocumentService
  ) {}

  ngOnInit(): void {
    this.document = new Document();

    this.getDocuments();

    this.initialiser();
  }

  handleAddDocument(){
    console.log("===== AJOUT D\'UN DOCUMENT =======");
    console.log("\t\t DOCUMENT "+JSON.stringify(this.document));
    this.documentService.addDocument(this.document).subscribe({
      next:(data:any) =>{
        this.document = data;
        this.liste.push(this.document);
        console.log("Ajout du document effectué avec succès ! "+JSON.stringify(this.document))
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

  
  initialiser(){
    this.typesDocuments = ["facture","reçu"];
    this.fournisseurs = [
      {id:1, contact:"contact1", libelle:"fournisseur1"},
      {id:1, contact:"contact1", libelle:"fournisseur1"},
      {id:1, contact:"contact1", libelle:"fournisseur1"},
    ]
    // this.liste = [
    //   {date:"28/09/2024", nom:"achat N°1", fournisseur:"fournisseur1"},
    //   {date:"29/09/2024", nom:"achat N°2", fournisseur:"fournisseur2"},
    //   {date:"30/09/2024", nom:"achat N°3", fournisseur:"fournisseur3"},
    //   {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4"},
    //   {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4"},
    //   {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4"},
    //   {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4"},
    //   {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4"},
    //   {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4"},
    //   {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4"},
    //   {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4"},
    //   {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4"},
    //   {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4"},
    //   {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4"},
    //   {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4"},
    //   {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4"},
    //   {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4"},
    //   {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4"},
    //   {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4"},
    //   {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4"},
    //   {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4"},
    //   {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4"},
    //   {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4"},
    //   {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4"},
    //   {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4"},
    //   {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4"},
    //   {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4"},
    // ]
    
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.document.file = file;
    console.log("le fichier "+JSON.stringify(event.target.files[0]))
    console.log("le fichier", event.target.value)

    const filePath: string = event.target.value;
    const formData = new FormData();
    formData.append('file', filePath);

    console.log("données ", formData)

  }
  
 
}
