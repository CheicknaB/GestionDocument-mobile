import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-payment-modal',
  templateUrl: './payment-modal.component.html',
  styleUrls: ['./payment-modal.component.scss'],
})
export class PaymentModalComponent  implements OnInit {

  montant : any;
  constructor(private modalController: ModalController) {}

  soumettre() {
    console.log("je suis là");
    const montant = this.montant;
    console.log("montant "+montant);
    // this.modalController.dismiss({
    //   role: 'success',
    //   data: {
    //     montant: montant,
    //   },
    // });
  }

  ngOnInit() {}


}
