import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  
  liste : any;

  constructor() {}

  ngOnInit(): void {
    this.chargerListe();
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
