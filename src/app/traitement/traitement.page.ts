import { Component, OnInit } from '@angular/core';
import { PaymentModalComponent } from '../payment-modal/payment-modal.component';
import { AlertController, ModalController } from '@ionic/angular';
import { DocumentService } from '../shared/services/document.service';
import { Paiement } from '../shared/models/paiement';

@Component({
  selector: 'app-traitement',
  templateUrl: './traitement.page.html',
  styleUrls: ['./traitement.page.scss'],
})
export class TraitementPage implements OnInit {



  montant: any;

  listeRecus: any;
  paiement! : Paiement;
  listeEnCours: any;
  listeImpayees: any;
  statusFactures = ['VALIDER', 'ORDONNER LE PAIEMENT', 'REJETER', 'METTRE EN ATTENTE'];
  statusFacturesEnCours = ['VALIDER', 'METTRE EN ATTENTE', 'ANNULER'];

  currentPage = "paiements";

  constructor(private modalController: ModalController,
    private documentService: DocumentService,
    public alertController: AlertController) { }
  ngOnInit(): void {
    this.chargerListe();
  }

  formatDate(dateString: string): string {
    const dateObject = new Date(dateString);
    const formattedDate = dateObject.toLocaleDateString('fr-FR', { year: 'numeric', month: '2-digit', day: '2-digit' });
    return formattedDate;
  }


  // async validerFacture() {
  //   const alert = await this.alertController.create({
  //     header: 'Confirmation',
  //     message: 'Voulez-vous vraiment valider cette facture ?',
  //     buttons: [
  //       {
  //         text: 'Annuler',
  //         role: 'cancel',
  //         cssClass: 'secondary',
  //         handler: () => {
  //           console.log('Validation de la facture annulée.');
  //         }
  //       }, {
  //         text: 'Valider',
  //         handler: () => {
  //           // Logique pour valider la facture si l'utilisateur confirme
  //           console.log('Facture validée !');
  //         }
  //       }
  //     ]
  //   });

  //   await alert.present();
  // }

  async validerFacture(element: any, methode: string) {
    // Liste des statuts de factures
    console.log("page : cheicka barro " + this.currentPage)
    if (this.currentPage == "fAvalider") {
      console.log(methode)
      const alert = await this.alertController.create({
        header: 'Traitement de la facture',
        message: 'Veuillez choisir une option',
        inputs: this.statusFactures.map((status, index) => ({
          name: 'radio',
          type: 'radio',
          label: status,
          value: status,
          checked: index === 0 // Sélectionner le premier élément par défaut
        })),
        buttons: [
          {
            text: 'Annuler',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Validation de la facture annulée.');
            }
          }, {
            text: 'Confirmer',
            handler: (statut) => {
              this.handleUpdateEtatFacture(element, statut);
            }
          }
        ]
      });

      await alert.present();
    } else if (this.currentPage == "fEnCours") {
      console.log(methode)
      const alert = await this.alertController.create({
        header: 'Traitement de la facture',
        message: 'Veuillez choisir une option',
        inputs: this.statusFacturesEnCours.map((status, index) => ({
          name: 'radio',
          type: 'radio',
          label: status,
          value: status,
          checked: index === 0
        })),
        buttons: [
          {
            text: 'Annuler',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Validation de la facture annulée.');
            }
          }, {
            text: 'Confirmer',
            handler: (statut) => {
              this.handleUpdateEtatFacture(element, statut);
            }
          }
        ]
      });

      await alert.present();
    }
    
  }

  formatMontant(montant: number): string {
    return montant.toLocaleString('fr-FR');
  }

  handleUpdateEtatFacture(element: any, nouvelEtat: string) {
    this.documentService.updateEtatFacture(element.id, this.getEtatEquivalent(nouvelEtat)).subscribe({
      next: (res: any) => {
        let index;
        if (this.currentPage == 'fAvalider')
          index = this.listeEnCours.findIndex((item: any) => item.id === element.id);
        else if (this.currentPage == 'fEnCours')
          index = this.listeImpayees.findIndex((item: any) => item.id === element.id);

        if (index !== -1) {
          if (this.currentPage == 'fAvalider') {
            if (nouvelEtat == 'APPROUVE')
              this.listeImpayees.push(element)
            this.listeEnCours.splice(index, 1);
          } else if (this.currentPage == 'fEnCours') {
            if (nouvelEtat == 'SOUMIS')
              this.listeEnCours.push(element)
            this.listeImpayees.splice(index, 1);
          }
          if (nouvelEtat == 'VALIDE')
            this.listeRecus.push(element);

        } else {
          console.log("Élément non trouvé dans la listeEnCours");
        }
      },
      error: (error: any) => {
        console.log("Erreur lors de la modification de l'État de la facture : " + JSON.stringify(error.error));
      }
    })
    this.chargerListe()
  }


  private getEtatEquivalent(texte: string) {
    if (texte === 'VALIDER') return 'VALIDE'
    else if (texte === 'ORDONNER LE PAIEMENT') return 'APPROUVE'
    else if (texte === 'REJETER') return 'REJETE'
    else if (texte === 'ANNULER') return 'ANNULE'
    else if (texte === 'METTRE EN ATTENTE') return 'EN_ATTENTE';
    else return "";
  }

  chargerListe() {

    this.documentService.getFacturesByStatut("SOUMIS").subscribe({
      next: (data: any) => {
        this.listeEnCours = data;
        console.log("factures à valider ...")
        
      },
      error: (error: any) => {
        console.log("Erreur lors de la recupération des factures à valider ===> " + error.error.error);
      }
    })

    this.documentService.getFacturesByEtatNotIn(["SOUMIS", "VALIDE", "EN_ATTENTE"]).subscribe({
      next: (data: any) => {
        this.listeImpayees = data;
        console.log("factures en cours ...")
      },
      error: (error: any) => {
        console.log("Erreur lors de la recupération des factures en cours ===> " + error.error.error);
      }
    })

    this.documentService.getFacturesByStatut("VALIDE").subscribe({
      next: (data: any) => {
        this.listeRecus = data;
        console.log("factures traitées ...")

      },
      error: (error: any) => {
        console.log("Erreur lors de la recupération des factures traitées ===> " + error.error.error);
      }
    })

  }

  test() {
    this.documentService.getFacturesByStatut("SOUMIS").subscribe({
      next: (data: any) => {
        this.listeEnCours = data;
      },
      error: (error: any) => {
        console.log("Erreur lors de la recupération des factures à valider ===> " + error.error.error);
      }
    })
  }

  getMontant(element : any) {

    this.paiement = new Paiement();
    this.paiement.montant = this.montant;
    this.documentService.addPaiement(element.id, this.paiement).subscribe({
      next:(data : any) => {
        console.log(" Paiement effectué avec succès ! ", data);
      },
      error: (error : any) => {
        console.log("erreur lors de lenregistrement du paiement : ", error.error)
      }
    })

  }


  async openPaymentModal(element: any) {
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
  element: any;
  elementDetail: any;

  setOpen(data: any, isOpen: boolean) {

    this.isModalOpen = isOpen;
    this.element = data;
  }

  setOpenDetails(data: any, isOpen: boolean) {
    
    this.handleGetPaiementsByFacture(data.id).subscribe({
      next:(listePaiements) => {
        this.elementDetail.paiements = listePaiements;
        console.log("Liste des paiements de la facture ", listePaiements);
      },
      error:(error) => {
        console.log("Erreur lors de la recupération des paiements associées à la facture!");
      }
    })

    this.isModalDetailsOpen = isOpen;
    this.elementDetail = data;
    console.log("mon element ", this.elementDetail);
  }

  handleGetPaiementsByFacture(factureId : number){
     return this.documentService.getPaiementsByFacture(factureId)
  }

}
