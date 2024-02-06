import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { PaymentModalComponent } from '../payment-modal/payment-modal.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{


montant: any;

  listeRecus : any;
  listeEnCours : any;
  listeImpayees : any;

  currentPage = "paiements";

  constructor(private modalController: ModalController,
    public alertController: AlertController) {}
  ngOnInit(): void {
    this.chargerListe();
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

getMontant() {
 console.log("Le montant est : "+this.montant);
}


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
element: any;
elementDetail: any;

setOpen(data:any,isOpen: boolean) {

  this.isModalOpen = isOpen;
  this.element = data;
}

setOpenDetails(data:any,isOpen: boolean) {
  this.isModalDetailsOpen = isOpen;
  this.elementDetail = data;
}

}
