import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { PaymentModalComponent } from '../payment-modal/payment-modal.component';
import { AuthentificationService } from '../shared/services/authentification.service';
import { User } from '../shared/models/user';
import { DocumentService } from '../shared/services/document.service';
import { environment } from 'src/environments/environment';
import { Paiement } from '../shared/models/paiement';
import { Recu } from '../shared/models/recu';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{


  montant: any;
  fichier : any;
  extension : any;
  recu! : Recu;
  urlFichiers : any;
  listeRecus : any;
  listeEnCours : any;
  listeImpayees : any;
  connectedUser : any;
  currentPage = "paiements";
  currentUser : User;
  paiement!: Paiement;

  constructor(private modalController: ModalController,
    private authService : AuthentificationService,
    private documentService: DocumentService,
    public alertController: AlertController) {
      
      this.currentUser = this.authService.utilisateur;
    }
  ngOnInit(): void {
    this.currentUser = this.authService.utilisateur;
    console.log("AuthService ===> ", this.authService)
    this.urlFichiers = environment.urlFichiers
    this.recu = new Recu();
    this.paiement = new Paiement();
    this.chargerListe();
  }
  
  hasRole(roleName: string): boolean {
    return this.currentUser.roles.some((role: any) => role.libelle === roleName);
  }

async validerFacture() {
  const alert = await this.alertController.create({
    header: 'Confirmation',
    message: 'Voulez-vous vraiment valider cette facture ?',
    buttons: [
      {
        text: 'Annuler',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Validation de la facture annulée.');
        }
      }, {
        text: 'Valider',
        handler: () => {
          // Logique pour valider la facture si l'utilisateur confirme
          console.log('Facture validée !');
        }
      }
    ]
  });

  await alert.present();
}
 
  chargerListe(){
    this.listeRecus = [
      {date:"28/09/2024", facture:"facture N°1", montant:"20.000", agent:"agent1"},
      {date:"29/09/2024", facture:"facture N°2", montant:"20.000", agent:"agent1"},
      {date:"30/09/2024", facture:"facture N°3", montant:"20.000", agent:"agent1"},
      {date:"01/10/2024", facture:"facture N°4", montant:"20.000", agent:"agent1"},
      {date:"01/10/2024", facture:"facture N°4", montant:"20.000", agent:"agent1"},
      {date:"01/10/2024", facture:"facture N°4", montant:"20.000", agent:"agent1"},
      {date:"01/10/2024", facture:"facture N°4", montant:"20.000", agent:"agent1"},
      {date:"01/10/2024", facture:"facture N°4", montant:"20.000", agent:"agent1"},
      {date:"01/10/2024", facture:"facture N°4", montant:"20.000", agent:"agent1"},
      {date:"01/10/2024", facture:"facture N°4", montant:"20.000", agent:"agent1"},
      {date:"01/10/2024", facture:"facture N°4", montant:"20.000", agent:"agent1"},
      {date:"01/10/2024", facture:"facture N°4", montant:"20.000", agent:"agent1"},
      {date:"01/10/2024", facture:"facture N°4", montant:"20.000", agent:"agent1"},
      {date:"01/10/2024", facture:"facture N°4", montant:"20.000", agent:"agent1"},
      {date:"01/10/2024", facture:"facture N°4", montant:"20.000", agent:"agent1"},
      {date:"01/10/2024", facture:"facture N°4", montant:"20.000", agent:"agent1"},
      {date:"01/10/2024", facture:"facture N°4", montant:"20.000", agent:"agent1"},
      {date:"01/10/2024", facture:"facture N°4", montant:"20.000", agent:"agent1"},
      {date:"01/10/2024", facture:"facture N°4", montant:"20.000", agent:"agent1"},
      {date:"01/10/2024", facture:"facture N°4", montant:"20.000", agent:"agent1"},
      {date:"01/10/2024", facture:"facture N°4", montant:"20.000", agent:"agent1"},
      {date:"01/10/2024", facture:"facture N°4", montant:"20.000", agent:"agent1"},
      {date:"01/10/2024", facture:"facture N°4", montant:"20.000", agent:"agent1"},
      {date:"01/10/2024", facture:"facture N°4", montant:"20.000", agent:"agent1"},
      {date:"01/10/2024", facture:"facture N°4", montant:"20.000", agent:"agent1"},
      {date:"01/10/2024", facture:"facture N°4", montant:"20.000", agent:"agent1"},
      {date:"01/10/2024", facture:"facture N°4", montant:"20.000", agent:"agent1"},
    ],
    this.listeImpayees = [
      {date:"28/09/2024", nom:"achat N°1", fournisseur:"fournisseur1",montant:2345,},
      {date:"29/09/2024", nom:"achat N°2", fournisseur:"fournisseur2",montant:2345,},
      {date:"30/09/2024", nom:"achat N°3", fournisseur:"fournisseur3",montant:2345,},
      {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4",montant:2345,},
      {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4",montant:2345,},
      {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4",montant:2345,},
      {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4",montant:2345,},
      {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4",montant:2345,},
      {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4",montant:2345,},
      {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4",montant:2345,},
      {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4",montant:2345,},
      {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4",montant:2345,},
      {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4",montant:2345,},
      {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4",montant:2345,},
      {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4",montant:2345,},
      {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4",montant:2345,},
      {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4",montant:2345,},
      {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4",montant:2345,},
      {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4",montant:2345,},
      {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4",montant:2345,},
      {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4",montant:2345,},
      {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4",montant:2345,},
      {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4",montant:2345,},
      {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4",montant:2345,},
      {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4",montant:2345,},
      {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4",montant:2345,},
      {date:"01/10/2024", nom:"achat N°4", fournisseur:"fournisseur4",montant:2345,},
    ],

  this.documentService.getFacturesByEtatNotInAndByUser(["SOUMIS", "VALIDE", "EN_ATTENTE"], this.currentUser.id).subscribe({
    next: (data: any) => {
      this.listeImpayees = data;
      console.log("factures en cours de lutilisateur ... ", data)
    },
    error: (error: any) => {
      console.log("Erreur lors de la recupération des factures en cours ===> " + error.error.error);
    }
  })
    this.listeEnCours = [
      {date:"28/09/2024", facture:"facture N°1", montant:"20.000", agent:"agent1", reste : 10000, "paiements": [
        {date:"28/09/2024", montant:50000, image:"assets"},
        {date:"28/09/2024", montant:50000, image:"assets"},
        {date:"28/09/2024", montant:50000, image:"assets"},
        {date:"28/09/2024", montant:50000, image:"assets"},
        {date:"28/09/2024", montant:50000, image:"assets"},
      ]},
      {date:"29/09/2024", facture:"facture N°2", montant:"20.000", agent:"agent1", reste : 10000, "paiements": [
        {date:"28/09/2024", montant:50000, image:"assets"},
        {date:"28/09/2024", montant:50000, image:"assets"},
        {date:"28/09/2024", montant:50000, image:"assets"},
        {date:"28/09/2024", montant:50000, image:"assets"},
        {date:"28/09/2024", montant:50000, image:"assets"},
      ]},
      {date:"30/09/2024", facture:"facture N°3", montant:"20.000", agent:"agent1", reste : 10000, "paiements": [
        {date:"28/09/2024", montant:50000, image:"assets"},
        {date:"28/09/2024", montant:50000, image:"assets"},
        {date:"28/09/2024", montant:50000, image:"assets"},
        {date:"28/09/2024", montant:50000, image:"assets"},
        {date:"28/09/2024", montant:50000, image:"assets"},
      ]},
      {date:"01/10/2024", facture:"facture N°4", montant:"20.000", agent:"agent1", reste : 10000, "paiements": [
        {date:"28/09/2024", montant:50000, image:"assets"},
        {date:"28/09/2024", montant:50000, image:"assets"},
        {date:"28/09/2024", montant:50000, image:"assets"},
        {date:"28/09/2024", montant:50000, image:"assets"},
        {date:"28/09/2024", montant:50000, image:"assets"},
      ]},
      {date:"01/10/2024", facture:"facture N°4", montant:"20.000", agent:"agent1", reste : 10000, "paiements": [
        {date:"28/09/2024", montant:50000, image:"assets"},
        {date:"28/09/2024", montant:50000, image:"assets"},
        {date:"28/09/2024", montant:50000, image:"assets"},
        {date:"28/09/2024", montant:50000, image:"assets"},
        {date:"28/09/2024", montant:50000, image:"assets"},
      ]},
      {date:"01/10/2024", facture:"facture N°4", montant:"20.000", agent:"agent1", reste : 10000, "paiements": [
        {date:"28/09/2024", montant:50000, image:"assets"},
        {date:"28/09/2024", montant:50000, image:"assets"},
        {date:"28/09/2024", montant:50000, image:"assets"},
        {date:"28/09/2024", montant:50000, image:"assets"},
        {date:"28/09/2024", montant:50000, image:"assets"},
      ]},
      {date:"01/10/2024", facture:"facture N°4", montant:"20.000", agent:"agent1", reste : 10000, "paiements": [
        {date:"28/09/2024", montant:50000, image:"assets"},
        {date:"28/09/2024", montant:50000, image:"assets"},
        {date:"28/09/2024", montant:50000, image:"assets"},
        {date:"28/09/2024", montant:50000, image:"assets"},
        {date:"28/09/2024", montant:50000, image:"assets"},
      ]},
      {date:"01/10/2024", facture:"facture N°4", montant:"20.000", agent:"agent1", reste : 10000, "paiements": [
        {date:"28/09/2024", montant:50000, image:"assets"},
        {date:"28/09/2024", montant:50000, image:"assets"},
        {date:"28/09/2024", montant:50000, image:"assets"},
        {date:"28/09/2024", montant:50000, image:"assets"},
        {date:"28/09/2024", montant:50000, image:"assets"},
      ]},
      {date:"01/10/2024", facture:"facture N°4", montant:"20.000", agent:"agent1", reste : 10000, "paiements": [
        {date:"28/09/2024", montant:50000, image:"assets"},
        {date:"28/09/2024", montant:50000, image:"assets"},
        {date:"28/09/2024", montant:50000, image:"assets"},
        {date:"28/09/2024", montant:50000, image:"assets"},
        {date:"28/09/2024", montant:50000, image:"assets"},
      ]},
      {date:"01/10/2024", facture:"facture N°4", montant:"20.000", agent:"agent1", reste : 10000, "paiements": [
        {date:"28/09/2024", montant:50000, image:"assets"},
        {date:"28/09/2024", montant:50000, image:"assets"},
        {date:"28/09/2024", montant:50000, image:"assets"},
        {date:"28/09/2024", montant:50000, image:"assets"},
        {date:"28/09/2024", montant:50000, image:"assets"},
      ]},
      {date:"01/10/2024", facture:"facture N°4", montant:"20.000", agent:"agent1", reste : 10000, "paiements": [
        {date:"28/09/2024", montant:50000, image:"assets"},
        {date:"28/09/2024", montant:50000, image:"assets"},
        {date:"28/09/2024", montant:50000, image:"assets"},
        {date:"28/09/2024", montant:50000, image:"assets"},
        {date:"28/09/2024", montant:50000, image:"assets"},
      ]},]

}

formatDate(dateString : string): string {
  const dateObject = new Date(dateString);
  const formattedDate = dateObject.toLocaleDateString('fr-FR', { year: 'numeric', month: '2-digit', day: '2-digit' });
  return formattedDate;
}

formatMontant(montant: number): string {
  return montant.toLocaleString('fr-FR');
}


getMontant(element : any) {
  this.recu.image = this.fichier;
  this.recu.extension = this.extension

  this.paiement = new Paiement();
  this.paiement.recu = this.recu
  console.log("recu dans paiement ", this.paiement)
  this.paiement.montant = this.montant;
  this.paiement.facture = element;

  this.documentService.addRecu(this.paiement).subscribe({
    next:(data:any) =>{
      console.log("Paiement effectué avec succès !"+data)
      this.currentPage = 'liste'
    },
    error: (error: any) => {
      console.log("erreur lors de l\'ajout du paiement "+JSON.stringify(error.error));
    }
  })

  // this.documentService.addPaiement(element.id, this.paiement).subscribe({
  //   next:(data : any) => {
  //     console.log(" Paiement effectué avec succès ! ", data);
  //     this.currentPage = 'paiements'
  //   },
  //   error: (error : any) => {
  //     console.log("erreur lors de lenregistrement du paiement : ", error.error)
  //   }
  // })

}

// addRecu(){
//   this.recu.image = this.fichier;
//   this.recu.extension = this.extension

//   this.paiement.montant = this.document.montantTotal
//   this.paiement.recu = this.recu
//   this.paiement.facture = this.factureAPayer

//   this.documentService.addRecu(this.paiement).subscribe({
//     next:(data:any) =>{
//       console.log("Paiement effectué avec succès !"+data)
//       this.currentPage = 'liste'
//     },
//     error: (error: any) => {
//       console.log("erreur lors de l\'ajout du paiement "+JSON.stringify(error.error));
//     }
//   })

// }


async openPaymentModal(element:any) {
  const modal = await this.modalController.create({
    component: PaymentModalComponent,
    componentProps: {
      invoiceElement: element
    }
  });

  modal.onDidDismiss().then((data) => {
    if (data.role === 'success') {
      const montant = data.data.montant;
      console.log('Montant récupéré :', montant);
    }
  });
  await modal.present();
}

isModalOpen = false;
isModalDetailsOpen = false;
isModalPaymentOpen = false;
element: any;
elementDetail: any;

setOpen(data:any,isOpen: boolean) {

  this.isModalOpen = isOpen;
  this.element = data;
}

setOpenPayment(data:any,isOpen: boolean) {
  this.isModalPaymentOpen = isOpen;
  this.element = data;
}

setOpenModalPayment(data:any,isOpen: boolean) {

  this.isModalPaymentOpen = isOpen;
  this.element = data;
}

setOpenDetails(data:any,isOpen: boolean) {
  this.isModalDetailsOpen = isOpen;
  this.elementDetail = data;
  
  this.documentService.getPaiementsByFacture(data.id).subscribe({
    next:(paiements : any) => {
      this.elementDetail.paiements = paiements
      console.log("la facture + ses paiements ", this.elementDetail);
    },
    error:(error) => {
      console.log("Erreur lors de la recupération des paiements associées à la facture!");
    }
  })
  console.log("element details ", this.elementDetail)
}

async onFileSelected(event: any) {
  const file: File = event.target.files[0];
  try {
    // Appelez la fonction pour convertir le fichier en base64 et attendez la résolution de la promesse
    this.fichier = await this.convertFileToBase64(file);
    this.extension = file.name.split('.').pop();
    console.log("fichier =====> ", this.fichier);
    console.log("extension =====> ", this.extension);
  } catch (error) {
    console.error("Une erreur s'est produite lors de la conversion du fichier en base64 : ", error);
  }
}

convertFileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      // Extraire les données Base64 de l'URL de données
      const base64String = (reader.result as string).split(',')[1];
      // Résolvez la promesse avec la chaîne Base64 extraite
      resolve(base64String);
    };
    reader.onerror = (error) => {
      // En cas d'erreur, rejetez la promesse avec l'erreur
      reject(error);
    };
    // Commencez la lecture du fichier en tant que data URL (base64)
    reader.readAsDataURL(file);
  });
}

}
